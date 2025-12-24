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
              <GoogleStars starsCount={5} rating="4.99" text="AVERAGE RATING" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold  mx-auto mt-4 tracking-tight">
              <RoughNotationGroup show={true}>
                <div>Stop Cleaning. Start Living. </div>Get{" "}
                <RoughNotation
                  type="circle"
                  color="#51a2ff"
                  padding={1}
                  strokeWidth={2}
                >
                  Professional{" "}
                </RoughNotation>
                <span>
                  Cleaning From $79 and Join the 100+ Families Who Delegate
                  Smart{" "}
                </span>
              </RoughNotationGroup>
            </h1>
            <h2 className="text-md mx-auto mt-4">
              Scrubbing toilets instead of spending time on what matters? Our
              background-checked cleaners bring all supplies, and equipment,
              handle everything you hate, and show up reliably—giving you 200+
              hours back this year, guaranteed.
            </h2>
            <div className="w-full  mt-8">
              <button
                className="btn btn-primary rounded-3xl bg-blue-600 border-0 min-w-[262px]"
                aria-label="Book now!"
              >
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
              sizes="(max-width: 400px) 380px, (max-width: 768px) 50vw, 768px"
              className="object-cover"
              fill
            />
            <button
              className="border-2 bg-white/50 border-amber-500 rounded-4xl px-4 py-2 font-semibold absolute bottom-[5%]  left-[50%] md:-left-[5%]"
              aria-label="1000+ Jobs done!"
            >
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
