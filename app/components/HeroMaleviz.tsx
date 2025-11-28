import Image from "next/image";
import heroImage from "@/public/images/hero.png";
import GradientOne from "./GradientOne";
import { GoogleStars } from "./GoogleStars";
import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
function HeroMaleviz() {
  //   const [show, setShow] = useState(true);
  return (
    <div>
      <div className="container max-w-[1440px] w-full mx-auto relative isolate px-4 md:px-32 py-8">
        {/* Two columns Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Left Column */}
          <div className="basis-2/5">
            <div className="w-full text-center">
              <GoogleStars />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-center mx-auto max-w-[80%] mt-4 tracking-tight">
              <RoughNotationGroup show={true}>
                <RoughNotation
                  type="circle"
                  color="#51a2ff"
                  padding={10}
                  strokeWidth={2}
                >
                  Professional{" "}
                </RoughNotation>
                <span className="text-blue-400">Kitchen</span> Deep Cleaning
                Service
              </RoughNotationGroup>
            </h1>
            <h2 className="text-center text-sm max-w-[80%] mx-auto mt-4">
              The Best Cleaning Service in LA
            </h2>
            <div className="w-full px-16 text-center mt-8">
              <button className="btn btn-primary rounded-3xl bg-blue-600 border-0 min-w-[262px]">
                Book now!
              </button>
            </div>
          </div>
          <div className="relative w-full basis-3/5 max-w-[350px] md:max-w-full">
            <Image
              // className="w-full h-full top-0 left-0 object-cover"
              className="block mx-auto"
              height={513}
              width={438}
              alt="Image"
              src={heroImage}
              loading="eager"
              objectFit="cover"
            />
            <button className="border-2 bg-white border-amber-500 rounded-4xl px-4 py-2 font-semibold absolute top-[60%] left-[0%] md:left-[20%]">
              1000+ Jobs done
            </button>
          </div>
        </div>
        <GradientOne />
      </div>
    </div>
  );
}
export { HeroMaleviz };
