"use client";
import { CallToAction } from "../components/couchComponents/CallToAction";
import { Header } from "../components/couchComponents/Header";
import { Hero } from "../components/couchComponents/Hero";
import { Prices } from "../components/couchComponents/Prices";
import { Problem } from "../components/couchComponents/Problem";
import { Team } from "../components/couchComponents/Team";
import { WhyUs } from "../components/couchComponents/WhyUs";
import { Footer } from "../components/Footer";
import { LogoTicker } from "../components/LogoTicker";
import { Testimonials } from "../components/Testimonials";
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
    <div className="relative font-blauerRegular text-couchDarkBlue">
      <Header />
      <Hero />
      <LogoTicker />
      <Problem />
      <WhyUs />
      <Prices />
      <CallToAction className="py-16" />
      <Testimonials />
      <Team />
      <CallToAction className="bg-linear-to-t from-white to-couchLightBlue" />
      <Footer handleClick={handleClick} />
    </div>
  );
}
