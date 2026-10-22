"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  OPEN_CONSENT_EVENT,
  openConsentSettings,
  readConsent,
  saveConsent,
} from "@/lib/consent";

/** Botón para reabrir el panel (footer, política de cookies). */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      Configurar cookies
    </button>
  );
}

function Toggle({
  label,
  text,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  text: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  const id = useId();
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl bg-brand-mist p-4">
      <div>
        <label htmlFor={id} className="font-semibold text-ink">
          {label}
        </label>
        <p className="mt-1 text-sm leading-relaxed text-ink-muted">{text}</p>
      </div>
      <input
        id={id}
        type="checkbox"
        role="switch"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="relative mt-1 h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full bg-brand-soft transition-colors duration-150 before:absolute before:left-0.5 before:top-0.5 before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-150 checked:bg-brand-dark checked:before:translate-x-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
      />
    </div>
  );
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sin elección guardada, se muestra el aviso en la primera visita.
    if (!readConsent()) setOpen(true);

    const reopen = () => {
      const c = readConsent();
      setAnalytics(c?.analytics ?? false);
      setAds(c?.ads ?? false);
      setSettings(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  useEffect(() => {
    if (open && settings) panelRef.current?.focus();
  }, [open, settings]);

  function decide(choice: { analytics: boolean; ads: boolean }) {
    saveConsent(choice);
    setOpen(false);
    setSettings(false);
  }

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-labelledby={titleId}
      tabIndex={-1}
      className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-h-[calc(100dvh-2rem)] max-w-xl overflow-y-auto rounded-3xl bg-white p-6 shadow-lift ring-1 ring-brand-softer focus:outline-none sm:left-6 sm:right-auto sm:mx-0 sm:p-7"
    >
      <h2 id={titleId} className="font-display text-xl font-bold tracking-tight">
        {settings ? "Configura tus cookies" : "Tu privacidad, tu decisión"}
      </h2>
      <p className="mt-2 text-base leading-relaxed text-ink-muted">
        Usamos cookies técnicas para que la web funcione y, solo si lo aceptas,
        cookies de Google para medir las visitas y mejorar nuestras campañas.
        Puedes cambiar de opinión cuando quieras. Más información en la{" "}
        <Link href="/cookies" className="font-semibold text-brand-dark underline">
          política de cookies
        </Link>
        .
      </p>

      {settings && (
        <div className="mt-5 space-y-3">
          <Toggle
            label="Necesarias"
            text="Imprescindibles para que la web funcione y para recordar esta elección. Siempre activas."
            checked
            disabled
          />
          <Toggle
            label="Análisis"
            text="Nos ayudan a saber cuántas personas nos visitan y qué páginas les interesan (Google Analytics)."
            checked={analytics}
            onChange={setAnalytics}
          />
          <Toggle
            label="Publicidad"
            text="Permiten medir y mejorar nuestros anuncios (Google Ads)."
            checked={ads}
            onChange={setAds}
          />
        </div>
      )}

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Button
          variant="secondary"
          className="flex"
          onClick={() => decide({ analytics: false, ads: false })}
        >
          Rechazar todas
        </Button>
        <Button
          className="flex"
          onClick={() => decide({ analytics: true, ads: true })}
        >
          Aceptar todas
        </Button>
      </div>
      <div className="mt-3 text-center">
        {settings ? (
          <button
            type="button"
            onClick={() => decide({ analytics, ads })}
            className="font-semibold text-brand-dark underline-offset-4 hover:underline"
          >
            Guardar mi selección
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setSettings(true)}
            className="font-semibold text-brand-dark underline-offset-4 hover:underline"
          >
            Configurar
          </button>
        )}
      </div>
    </div>
  );
}
