import Image from "next/image";
import HeroImageDesktop from "@/public/images/hero_ol2_768.png";
import { AvatarGroup } from "../components/SmallComponents/AvatarGroup";
import { GoogleStars } from "../components/GoogleStars";
export default function AboutPage() {
  return (
    <div className="container max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="w-full md:w-1/2">
          <div>
            <GoogleStars
              starsCount={5}
              rating="4.99"
              text="AVERAGE RATING"
              inline={false}
            />
          </div>
          <div>
            <AvatarGroup />
          </div>
          <h1>About Us</h1>
          <p>This is the about page content.</p>
        </div>
        <div className="relative w-full md:w-1/2 h-[350px] md:h-[600px]">
          <Image
            fetchPriority="high"
            src={HeroImageDesktop}
            priority
            alt="some"
            sizes="(max-width: 250px) 140px, (max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw"
            // sizes="(min-width: 780px) 479px, 100vw"
            className="object-cover"
            fill
          />
        </div>
      </div>
    </div>
  );
}
