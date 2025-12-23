import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/app/utils/lenis";
import "lenis/dist/lenis.css";
import { Partytown } from "@qwik.dev/partytown/react";
import { GoogleTagManager } from "@/app/components/GoogleTagManager";

const latoSans = Geist({
  variable: "--font-lato-sans",
  subsets: ["latin"],
});
const latoMono = Geist_Mono({
  variable: "--font-lato-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kitchen Test Landing",
  description: "The best cleaning services in Los Angeles",
};
const GTM_ID = process.env.NEXT_PUBLIC_TAG_MANAGER_ID || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Optional: Preconnect for better performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Partytown forward={["dataLayer.push"]} />
      </head>
      <body>
        <ReactLenis>
          {/* GTM noscript fallback */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>

          {/* Load GTM */}
          {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}

          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
