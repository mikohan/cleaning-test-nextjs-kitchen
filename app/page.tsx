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

export default function AboutPage() {
  const lenis = useLenis(); //new Lenis();
  const handleClick = () => {
    lenis?.scrollTo(0, {
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };
  return (
    <main className="relative font-blauerRegular text-couchDarkBlue">
      <Header />
      <Hero />
      <LogoTicker />
      <Problem />
      <WhyUs />
      <Prices />
      <CallToAction className="py-16" />
      <Testimonials />
      <Team />
      <CallToAction className="bg-linear-to-t from-white to-couchLightBlue mb-16" />
      <Footer handleClick={handleClick} />
    </main>
  );
}
