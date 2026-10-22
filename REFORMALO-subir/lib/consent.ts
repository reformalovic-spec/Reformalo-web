// Consentimiento de cookies conectado al modo de consentimiento v2 de Google.
// La elección se guarda en localStorage (almacenamiento técnico, exento de
// consentimiento) y se reaplica antes de cargar GTM (ver GoogleTagManager).

export const CONSENT_KEY = "reformalo-consent";
export const CONSENT_VERSION = 1;
/** Evento para reabrir el panel desde el footer o la política de cookies. */
export const OPEN_CONSENT_EVENT = "reformalo:abrir-cookies";

export type Consent = {
  v: number;
  analytics: boolean;
  ads: boolean;
  date: string;
};

type GtagConsent = Record<
  "analytics_storage" | "ad_storage" | "ad_user_data" | "ad_personalization",
  "granted" | "denied"
>;

export function toGtagConsent(c: Pick<Consent, "analytics" | "ads">): GtagConsent {
  const ads = c.ads ? "granted" : "denied";
  return {
    analytics_storage: c.analytics ? "granted" : "denied",
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
  };
}

export function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consent;
    return c.v === CONSENT_VERSION ? c : null;
  } catch {
    return null;
  }
}

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

// GTM espera el objeto `arguments` de una función gtag, no un array.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

// Cookies que dejan las etiquetas de Google; se borran al retirar el permiso.
const cookiePrefixes = { analytics: ["_ga", "_gid", "_gat"], ads: ["_gcl", "_gac"] };

function deleteCookies(prefixes: string[]) {
  const host = window.location.hostname;
  const domains = ["", host, `.${host.replace(/^www\./, "")}`];
  for (const pair of document.cookie.split(";")) {
    const name = pair.split("=")[0].trim();
    if (!prefixes.some((p) => name.startsWith(p))) continue;
    for (const d of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
    }
  }
}

export function saveConsent(choice: Pick<Consent, "analytics" | "ads">) {
  const consent: Consent = {
    v: CONSENT_VERSION,
    ...choice,
    date: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {
    // Sin almacenamiento (modo privado): se aplica solo a esta visita.
  }
  gtag("consent", "update", toGtagConsent(choice));
  window.dataLayer?.push({ event: "consent_update", ...toGtagConsent(choice) });
  if (!choice.analytics) deleteCookies(cookiePrefixes.analytics);
  if (!choice.ads) deleteCookies(cookiePrefixes.ads);
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}
