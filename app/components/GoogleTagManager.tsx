// components/GoogleTagManager.tsx
"use client";

import Script from "next/script";

interface GoogleTagManagerProps {
  gtmId: string;
}

export function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  return (
    <>
      {/* Initialize dataLayer BEFORE GTM script */}
      <Script
        id="gtm-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
          `,
        }}
      />

      {/* Load GTM script */}
      <Script
        id="gtm-script"
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
        strategy="afterInteractive"
      />
    </>
  );
}
