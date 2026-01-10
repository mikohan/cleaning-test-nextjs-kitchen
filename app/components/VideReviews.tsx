import Image from "next/image";
import DoneIcon from "@/public/images/couch/done.svg";
import ShieldIcon from "@/public/images/couch/sheild.svg";
import WalletdIcon from "@/public/images/couch/wallet.svg";
import { Tag } from "@/app/components/SmallComponents/Tag";
import { VideoComponentTestimonials } from "./VideoComponentTestimonials";
import Test3Poster from "@/public/images/couch/test3.jpg";
import Test2Poster from "@/public/images/couch/test2.jpg";
import Test1Poster from "@/public/images/couch/test1.jpg";

export const VideoReviews = () => {
  return (
    <section className="bg-gradient pb-16 md:pb-32">
      <div className="container px-6 mx-auto">
        {/* Vertical flex for all boxes on the page. */}
        <div className="flex flex-col justify-center items-center mt-8">
          <Tag text="Safe for Pets and Children" />
          <h2 className="mt-12 text-3xl md:text-5xl font-gradient font-blauerSemibold text-center font-gradient">
            What people say about us
          </h2>
          <h3 className="subheader text-center mt-2">
            Helped 1000+ families - fast, safe, professional
          </h3>
          {/* Common container */}
          <div className="flex flex-col md:flex-row gap-8 pt-16">
            <div className="md:max-w-[33%]">
              <VideoComponentTestimonials
                source="videos/test1.mp4"
                loop={false}
                autoPlay={false}
                poster={Test1Poster.src}
              />
            </div>

            <div className="md:max-w-[33%]">
              <VideoComponentTestimonials
                loop={false}
                source="videos/test2.mp4"
                autoPlay={false}
                poster={Test2Poster.src}
              />
            </div>
            <div className="md:max-w-[33%]">
              <VideoComponentTestimonials
                loop={false}
                source="videos/test3.mp4"
                autoPlay={false}
                poster={Test3Poster.src}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
