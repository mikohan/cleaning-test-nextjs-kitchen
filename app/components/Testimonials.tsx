"use client";
import { ITestimonial, testimonials } from "@/app/data";
import { Tag } from "./SmallComponents/Tag";
import Image from "next/image";
import { GoogleStars } from "./GoogleStars";
import { motion } from "framer-motion";

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: ITestimonial[];
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 25,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-8 mt-8 pb-6"
    >
      {props.testimonials.map(({ text, image, userName }, i) => (
        <div key={i} className="card font-blauerRegular">
          <div className="inline-flex gap-4 items-center mb-4">
            <Image width={40} height={40} src={image} alt={userName} />
            <div className="font-blauerSemibold text-xl">{userName}</div>
          </div>
          <GoogleStars starsCount={5} inline text="" rating="" />
          <div className=" text-couchShadow leading-5 mt-4">{text}</div>
        </div>
      ))}
    </motion.div>
  </div>
);

function Testimonials() {
  const firstCol = testimonials.slice(0, 9);
  const secondCol = testimonials.slice(9, 18);
  const thridCol = testimonials.slice(18, 27);
  return (
    <section className="bg-white">
      <div className="container px-6 mx-auto">
        {/* Header and subheader */}
        <div className="mt-8 text-center">
          <Tag text="Testimonials" />
        </div>
        <h2 className="font-gradient h2-header mt-12">
          What our customers say
        </h2>
        <p className="subheader text-center mt-2 px-8 mb-16 md:mb-32">
          Our customer love us so much. All reviews are real.
          <a
            href="4.9 Google Rated https://share.google/oDULc3KpCXQC52z9f"
            target="_blank"
            rel="noopener noreferrer"
            className="text-couchBlue underline"
          >
            {" "}
            Check it here.
          </a>
        </p>
        <div className="flex justify-center gap-6 mt-4 mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[868px] overflow-hidden">
          <TestimonialsColumn testimonials={firstCol} duration={17} />
          <TestimonialsColumn
            duration={27}
            testimonials={secondCol}
            className="hidden md:block"
          />
          <TestimonialsColumn
            duration={21}
            testimonials={thridCol}
            className="hidden lg:block"
          />
        </div>
        {/* Testimonials mapping */}
      </div>
    </section>
  );
}
export { Testimonials };
