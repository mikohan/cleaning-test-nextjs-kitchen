import Image from "next/image";
import HeroImageMobile from "@/public/images/hero_ol2_360.png";
import HeroImageDesktop from "@/public/images/hero_ol2_768.png";
import HeroImageDesktopJpg from "@/public/images/hero_ol_768.jpg";
export default function AboutPage() {
  return (
    <div className="w-full h-screen bg-blue-200">
      <div className="container max-w-4xl mx-auto bg-blue-100">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-1/2">
            <h1>About Us</h1>
            <p>This is the about page content.</p>
          </div>
          <div className="relative w-full md:w-1/2 h-[350px] md:h-[600px]  border border-blue-500">
            <Image
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
    </div>
  );
}
