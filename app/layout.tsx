import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ReactLenis from "lenis/react";
import "lenis/dist/lenis.css";
import { Partytown } from "@qwik.dev/partytown/react";
import { GoogleTagManager } from "@/app/components/GoogleTagManager";

export const metadata: Metadata = {
  title: "Couch and Upholstery Professional cleaning in LA",
  description: "The best cleaning services in Los Angeles",
};

const GTM_ID = process.env.NEXT_PUBLIC_TAG_MANAGER_ID || "GTM-KSG58TR5";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning
    <html lang="en">
      <head>
        {/* 1. Partytown Configuration */}
        {/* <Partytown debug={true} forward={["dataLayer.push", "fbq"]} /> */}
        <Partytown
          debug={false} // Turn off debug for production performance
          forward={["dataLayer.push", "fbq"]}
          resolveUrl={(url) => {
            // In production, self.location.origin is 'https://upholstery.angaracleaning.com'
            const origin = self.location.origin;

            if (url.hostname === "connect.facebook.net") {
              // Prevent double proxying if the worker re-processes the URL
              if (url.pathname.startsWith("/proxy/fb")) return url;

              return new URL(`/proxy/fb${url.pathname}${url.search}`, origin);
            }

            if (url.hostname === "www.googletagmanager.com") {
              if (url.pathname.startsWith("/proxy/gtm")) return url;
              return new URL(`/proxy/gtm${url.pathname}${url.search}`, origin);
            }

            return url;
          }}
        />
        <script
          id="gtm"
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', 'GTM-KSG58TR5')`,
          }}
        />
      </head>
      <ReactLenis root>
        <body>
          {GTM_ID && (
            <>
              <noscript>
                <iframe
                  src={`https://www.googletagmanager.com/ns.html?id=GTM-KSG58TR5`}
                  height="0"
                  width="0"
                  style={{ display: "none", visibility: "hidden" }}
                />
              </noscript>
              {/* <GoogleTagManager gtmId={GTM_ID} /> */}
            </>
          )}
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
