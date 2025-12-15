"use client";
import { CallToAction } from "../components/couchComponents/CallToAction";
import { Header } from "../components/couchComponents/Header";
import { Hero } from "../components/couchComponents/Hero";
import { Prices } from "../components/couchComponents/Prices";
import { Problem } from "../components/couchComponents/Problem";
import { WhyUs } from "../components/couchComponents/WhyUs";
import { Footer } from "../components/Footer";
import { LogoTicker } from "../components/LogoTicker";
import { Testimonials } from "../components/Testimonials";
import { ArrowUpSVG } from "../components/SmallComponents/ArrowUpSVG";
import { useLenis } from "lenis/react";

export default function AboutPage() {
  const lenis = useLenis(); //new Lenis();
  // useEffect(() => {
  //   function raf(time: DOMHighResTimeStamp) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);

  const handleClick = () => {
    //lenis?.scrollTo(0, { duration: 1 });
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
      <Testimonials />
      <CallToAction color="yellow" />
      <div className="sticky bottom-12 right-4 w-full pr-4 h-auto flex justify-end ">
        <button
          className="h-16 w-16 aspect-square rounded-full bg-couchBlue/25 cursor-pointer border-4 border-couchBlue/30 flex justify-center items-center group hover:scale-105   transform duration-300 ease-in-out"
          onClick={handleClick}
        >
          <ArrowUpSVG className="text-couchLightBlue/70 w-8 h-8" />
        </button>
      </div>
      <Footer />
    </div>
  );
}
