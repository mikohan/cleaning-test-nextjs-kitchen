import { CallToAction } from "../components/couchComponents/CallToAction";
import { Header } from "../components/couchComponents/Header";
import { Hero } from "../components/couchComponents/Hero";
import { Prices } from "../components/couchComponents/Prices";
import { Problem } from "../components/couchComponents/Problem";
import { WhyUs } from "../components/couchComponents/WhyUs";
import { LogoTicker } from "../components/LogoTicker";
import { Testimonials } from "../components/Testimonials";

export default function AboutPage() {
  return (
    <div className="font-blauerRegular text-couchDarkBlue pb-64">
      <Header />
      <Hero />
      <LogoTicker />
      <Problem />
      <WhyUs />
      <Prices />
      <Testimonials />
      <CallToAction color="yellow" />
    </div>
  );
}
