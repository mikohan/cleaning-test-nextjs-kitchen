import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className={`${latoSans.variable} ${latoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
