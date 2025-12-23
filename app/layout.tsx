import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/app/utils/lenis";
import "lenis/dist/lenis.css";
import FacebookPixel from "./components/FacebookPixel";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
      <ReactLenis root>
        <body
          className={`${latoSans.variable} ${latoMono.variable} antialiased`}
        >
          {children}
          <FacebookPixel />
        </body>
      </ReactLenis>
    </html>
  );
}
