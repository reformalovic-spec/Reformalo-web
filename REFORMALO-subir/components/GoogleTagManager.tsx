import Script from "next/script";

// Modo de consentimiento v2: todo lo que no es imprescindible empieza
// denegado, así las etiquetas de Google no guardan cookies sin permiso
// (LSSI 22.2). Si se añade un banner de cookies, debe llamar a
// gtag('consent', 'update', {...}) cuando el usuario acepte.
const consentDefaults = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  functionality_storage: "granted",
  security_storage: "granted",
};

/** Fragmento de Google Tag Manager para el <head>. */
export function GoogleTagManagerScript({ id }: { id: string }) {
  return (
    <Script id="gtm" strategy="afterInteractive">
      {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',${JSON.stringify(consentDefaults)});
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');`}
    </Script>
  );
}

/** Alternativa sin JavaScript, justo después de abrir el <body>. */
export function GoogleTagManagerNoScript({ id }: { id: string }) {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${id}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
