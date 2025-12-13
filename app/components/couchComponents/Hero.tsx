import { GoogleStars } from "../GoogleStars";
import { AvatarGroup } from "../AvatarGroup";
import VideoImage from "@/public/images/couch/hero.jpg";
import VideoIcon from "@/public/images/couch/video-icon.svg";
import Image from "next/image";

function Hero() {
  return (
    <section className="pt-8 md:pt-16 pb-16 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#e6f1fe_50%,#ffffff)]">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Wrapper for text and image */}
        <div className="md:flex justify-center ">
          {/* Text and buttons section */}
          <div className="text-center md:flex-1">
            <div className="inline-flex md:flex-col items-center md:gap-2 ">
              <GoogleStars starsCount={5} rating="" />
              <AvatarGroup />
            </div>
            {/* Wrapper for text and button without rating */}
            <div className="flex flex-col md:items-center md:w-full">
              <h1 className="md:leading-14 mt-4 md:mt-32 text-3xl md:text-5xl font-bold tracking-tight bg-linear-to-b from-couchDarkBlue to-couchGradientBlue text-transparent bg-clip-text">
                Couch and Upholstery Steam Cleaning in LA
              </h1>
              <h3 className="mx-8 text-lg md:text-2xl font-blauerRegular text-couchDarkBlue/70 tracking-tight leading-4.5 mt-4 md:mt-8">
                We restore freshness, remove odors, and save you furniture time
                & money.
              </h3>
              <div className="w-full md:flex md:gap-4 md:mt-40 md:items-center">
                <button className="relative btn hover:scale-105 transition-transform duration-300 group overflow-hidden drop-shadow-sm">
                  <span className="absolute inset-0 bg-white opacity-30 rotate-45 -translate-x-full group-hover:translate-x-full blur-sm transition-transform duration-500"></span>
                  <span className="relative z-10">Book appointment</span>
                </button>
                <div className="hidden md:inline-flex items-center gap-4 group hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="border-4 border-couchBlue/50 h-[75px] w-[75px] rounded-full flex items-ceter justify-center bg-transparent shadow-md">
                    <Image
                      src={VideoIcon}
                      height={24}
                      width={24}
                      alt="button"
                      className="block ml-1"
                    />
                  </div>
                  <div className="block">Watch Video</div>
                </div>
              </div>
            </div>
          </div>
          {/* Image container wrapper */}
          <div className="mt-16 md:mt-0 md:flex-1 flex justify-center">
            <div className="relative aspect-4/6 w-full md:w-[80%] ">
              <Image
                fetchPriority="high"
                src={VideoImage}
                priority
                alt="some"
                className=""
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Hero };
