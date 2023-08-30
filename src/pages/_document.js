import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <script
          type="text/javascript"
          src="https://www.termsfeed.com/public/cookie-consent/4.1.0/cookie-consent.js"
          charSet="UTF-8"
        ></script>
        <script
          type="text/javascript"
          charSet="UTF-8"
          dangerouslySetInnerHTML={{
            __html: `
document.addEventListener('DOMContentLoaded', function () {
cookieconsent.run({"notice_banner_type":"interstitial","consent_type":"express","palette":"light","language":"de","page_load_consent_levels":["strictly-necessary"],"notice_banner_reject_button_hide":false,"preferences_center_close_button_hide":false,"page_refresh_confirmation_buttons":false,"website_name":"Safetube.eu","website_privacy_policy_url":"https://www.safetube.eu/datenschutzerklaerung/"});
});`,
          }}
        ></script>

        <script
          type="text/plain"
          data-cookie-consent="strictly-necessary"
        ></script>
        <script
          type="text/plain"
          data-cookie-consent="strictly-necessary"
        ></script>
      </Head>
      <body
        className={`bg-slate-900 font-sans`}
        style={{ overflowX: "hidden" }}
      >
        <div className="Simpleflex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
