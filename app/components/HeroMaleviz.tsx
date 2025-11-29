import Image from "next/image";
import heroImage from "@/public/images/hero.png";
import heroImageOl from "@/public/images/hero_ol2.png";
import GradientOne from "./GradientOne";
import { GoogleStars } from "./GoogleStars";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
function HeroMaleviz() {
  //   const [show, setShow] = useState(true);
  return (
    <div>
      <div className="container max-w-[1440px] w-full h-full mx-auto relative isolate px-4 md:px-32 py-8">
        {/* Two columns Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-1 h-full">
          {/* Left Column */}
          <div className="basis-2/5">
            <div className="w-full text-center">
              <GoogleStars />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-center mx-auto max-w-[90%] mt-4 tracking-tight">
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
          <div className="relative h-[600px] w-60 basis-3/5  border border-blue-500">
            <Image
              // className="w-full h-full top-0 left-0 object-cover"
              className="mx-auto object-cover border border-red-500"
              alt="Image"
              src={heroImageOl}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              loading="eager"
              fill
            />
            {/* <button className="border-2 bg-white border-amber-500 rounded-4xl px-4 py-2 font-semibold absolute top-[60%] left-[0%] md:left-[20%]">
              1000+ Jobs done
            </button> */}
          </div>
        </div>
        {/* <GradientOne /> */}
      </div>
    </div>
  );
}
export { HeroMaleviz };
