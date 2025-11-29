import Image, { StaticImageData } from "next/image";
import GradientOne from "./GradientOne";
import { GoogleStars } from "./GoogleStars";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
type ImgSrc = {
  src: StaticImageData;
};
function HeroMaleviz({ src }: ImgSrc) {
  //   const [show, setShow] = useState(true);
  return (
    <div>
      <div className="container max-w-[1440px] w-full h-full mx-auto relative isolate px-4 md:px-32 py-8">
        {/* Two columns Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 h-full">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
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
          <div className="relative w-full md:w-1/2 h-[450px] md:h-[600px]">
            <Image
              fetchPriority="high"
              src={src?.src}
              priority
              alt="some"
              sizes="(max-width: 250px) 140px, (max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw"
              className="object-cover"
              fill
            />
            <button className="border-2 bg-white/50 border-amber-500 rounded-4xl px-4 py-2 font-semibold absolute bottom-[5%]  left-[50%] md:-left-[5%]">
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
