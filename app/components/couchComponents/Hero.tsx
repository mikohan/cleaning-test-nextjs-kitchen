import { GoogleStars } from "../GoogleStars";
import { AvatarGroup } from "../AvatarGroup";
import { ModalDaisy } from "../ModalDaisy";
import { ModalVideo } from "@/app/components/ModalVideo";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { VideoComponent } from "../VideoComponent";

function Hero() {
  return (
    <section className="pt-8 md:pt-16 pb-16 bg-gradient">
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
              <RoughNotationGroup show={true}>
                <h1 className="md:leading-14 mt-4 md:mt-32 text-3xl md:text-5xl font-bold font-gradient">
                  Couch and Upholstery{" "}
                  <RoughNotation
                    type="circle"
                    color="#51a2ff"
                    padding={1}
                    strokeWidth={2}
                  >
                    Professional{" "}
                  </RoughNotation>
                  Steam Cleaning in LA
                </h1>
              </RoughNotationGroup>
              <h2 className="mx-8 text-lg md:text-2xl font-blauerRegular text-couchDarkBlue/70 tracking-tight leading-4.5 mt-4 md:mt-8">
                We restore freshness, remove odors, and save you furniture time
                & money. Professional, safe, fast.
              </h2>
              <div className="w-full md:flex md:gap-4 mt-16 md:mt-40 md:items-center">
                <ModalDaisy />
                <ModalVideo />
              </div>
            </div>
          </div>
          {/* Image container wrapper */}
          <div className="mt-16 md:mt-0 md:flex-1 flex justify-center">
            <div className="relative aspect-1080/1350 w-full md:w-[80%] ">
              <VideoComponent
                source="/videos/LandPage1.mp4"
                width="1080"
                heigh="1350"
              />

              {/* <Image
                fetchPriority="high"
                src={VideoImage}
                priority
                alt="some"
                className="rounded-4xl"
                fill
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Hero };
