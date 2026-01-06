import type { Metadata } from "next";
import { jsonLd } from "./data2";
import "./globals.css";
import ReactLenis from "lenis/react";
import "lenis/dist/lenis.css";
import { Partytown } from "@qwik.dev/partytown/react";

export const metadata: Metadata = {
  title: "Angara Streamers - Professional Deep Cleaning in Los Angeles",
  description:
    "Expert deep cleaning services in Los Angeles. We detail every corner, move furniture, and provide thorough cleaning that goes beyond surface level. Real deep cleaning takes time - we do it right.",
  openGraph: {
    title: "Angara Streamers - Professional Deep Cleaning Services",
    description:
      "Professional deep cleaning in Los Angeles. We move furniture, detail baseboards, and clean areas others miss. Real deep cleaning.",
    url: "https://upholstery.angaracleaning.com",
    siteName: "Angara Streamers",
    images: [
      {
        url: "https://upholstery.angaracleaning.com/images/couch/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Angara Streamers Deep Cleaning Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angara Streamers - Professional Deep Cleaning Services",
    description:
      "Expert deep cleaning in Los Angeles. Real deep cleaning takes time - we detail every surface, move furniture, and clean what others miss.",
    images: ["https://upholstery.angaracleaning.com/images/couch/hero.jpg"],
  },
};
const GTM_ID = process.env.NEXT_PUBLIC_TAG_MANAGER_ID || "GTM-KSG58TR5";
const ogUrl =
  process.env.NEXT_PUBLIC_COMPANY_WEBSITE + "/images/couch/hero.jpg" ||
  "https://upholstery.angaracleaning.com/images/couch/hero.jpg";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning
    <html lang="en" className="scroll-smooth">
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        ></script>

        <meta property="og:image" content={ogUrl} />
      </head>
      <ReactLenis root>
        <body>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-couchBlue text-white p-4 z-50"
          >
            Skip to content
          </a>
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
