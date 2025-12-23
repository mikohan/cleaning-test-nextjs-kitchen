import Image from "next/image";
import { problems } from "@/app/data"; // Array of texts and images
import { ProcessSmall } from "./ProcessSmall";
import { Tag } from "../SmallComponents/Tag";

export const Problem = () => (
  <section className="bg-gradient">
    <div className="px-6 container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <Tag text="Problems We Solve" />
        <h2 className="mt-8 text-3xl md:text-5xl font-gradient font-blauerSemibold text-center tracking-tight">
          Think your couch is ruined?
        </h2>
        <h3 className="subheader text-center mt-4">
          We bring it back—fast, safe, professional
        </h3>
        <div className="mt-16 flex flex-col md:flex-row md:gap-8 font-blauerRegular">
          {problems.map((obj, i) => (
            <div key={i} className="">
              <div className="relative h-60 w-full mb-4">
                <Image
                  alt={`Image of problem we solve-${i}`}
                  src={obj.img}
                  className="w-full h-auto object-cover rounded-2xl"
                  fill
                  sizes="(min-width: 1540px) 503px, (min-width: 1280px) 412px, (min-width: 780px) 383px, (min-width: 680px) 592px, (min-width: 460px) 90vw, calc(11.43vw + 342px"
                />
              </div>
              <p className="text-couchShadow text-center mb-16">{obj.text}</p>
            </div>
          ))}
        </div>
        <ProcessSmall />
      </div>
    </div>
  </section>
);
