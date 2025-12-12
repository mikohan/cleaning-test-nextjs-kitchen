import { GoogleStars } from "../GoogleStars";
import { AvatarGroup } from "../AvatarGroup";
import VideoImage from "@/public/images/couch/hero.jpg";
import Image from "next/image";

function Hero() {
  return (
    <section className="pt-8 pb-16">
      <div className="container px-6 mx-auto">
        <div>
          <div>
            <GoogleStars starsCount={5} rating="" />
            <AvatarGroup />
          </div>
          <h1 className="text-3xl font-bold tracking-tight bg-linear-to-b from-couchDarkBlue to-couchGradientBlue text-transparent bg-clip-text">
            Couch and Upholstery Steam Cleaning in LA
          </h1>
          <h3 className="text-lg font-blauerRegular text-couchDarkBlue/70 tracking-tight leading-4.5 mt-4">
            We restore freshness, remove odors, and save you furniture time &
            money.
          </h3>
          <button className="btn">Secure your appointment</button>
        </div>
        <div>
          <Image src={VideoImage} alt="Hero image" className="mt-16 md:mt-0" />
        </div>
      </div>
    </section>
  );
}
export { Hero };
