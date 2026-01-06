"use client";
import { CallToAction } from "@/app/components/couchComponents/CallToAction";
import { Header } from "@/app/components/couchComponents/Header";
import { Hero } from "@/app/components/couchComponents/Hero";
import { Prices } from "@/app/components/couchComponents/Prices";
import { Problem } from "@/app/components/couchComponents/Problem";
import { Team } from "@/app/components/couchComponents/Team";
import { WhyUs } from "@/app/components/couchComponents/WhyUs";
import { Footer } from "@/app/components/Footer";
import { LogoTicker } from "@/app/components/LogoTicker";
import { Testimonials } from "@/app/components/Testimonials";
import { useLenis } from "lenis/react";
import { jsonLd } from "@/app/data2";
import Head from "next/head";

export default function AboutPage() {
  const lenis = useLenis(); //new Lenis();
  const handleClick = () => {
    lenis?.scrollTo(0, {
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };
  console.log(jsonLd);
  return (
    <main className="relative font-blauerRegular text-couchDarkBlue">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/>/g, "\\u003c"),
          }}
        ></script>
      </Head>
      <Header />
      <Hero />
      <LogoTicker />
      <Problem />
      <WhyUs />
      <section id="prices">
        <Prices />
      </section>
      <CallToAction className="py-16" />
      <section id="reviews">
        <Testimonials />
      </section>
      <Team />
      <CallToAction className="bg-linear-to-t from-white to-couchLightBlue mb-16" />
      <Footer handleClick={handleClick} />
    </main>
  );
}
