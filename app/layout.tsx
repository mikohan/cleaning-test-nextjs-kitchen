import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import ReactLenis from "lenis/react";
import "lenis/dist/lenis.css";
import { Partytown } from "@qwik.dev/partytown/react";
import { GoogleTagManager } from "@/app/components/GoogleTagManager";

export const metadata: Metadata = {
  title: "Couch and Upholstery Professional cleaning in LA",
  description: "The best cleaning services in Los Angeles",
};

const GTM_ID = process.env.NEXT_PUBLIC_TAG_MANAGER_ID || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning
    <html lang="en">
      <head>
        {/* Optional: Preconnect for better performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Partytown forward={["dataLayer.push"]} />
      </head>
      <ReactLenis root>
        <body>
          {/* Only render GTM if the ID exists to prevent mismatch logic */}
          {GTM_ID && (
            <>
              <noscript>
                <iframe
                  src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                  height="0"
                  width="0"
                  style={{ display: "none", visibility: "hidden" }}
                />
              </noscript>
              <GoogleTagManager gtmId={GTM_ID} />
            </>
          )}
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
