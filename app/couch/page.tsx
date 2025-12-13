import { Header } from "../components/couchComponents/Header";
import { Hero } from "../components/couchComponents/Hero";
import { Problem } from "../components/couchComponents/Problem";
import { LogoTicker } from "../components/LogoTicker";

export default function AboutPage() {
  return (
    <div className="font-blauerRegular text-couchDarkBlue">
      <Header />
      <Hero />
      <LogoTicker />
      <Problem />
    </div>
  );
}
