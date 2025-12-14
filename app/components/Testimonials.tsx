import { ITestimonial, testimonials } from "@/app/data";
import { Tag } from "./SmallComponents/Tag";
import Image from "next/image";
import { GoogleStars } from "./GoogleStars";
import { clsx } from "clsx";

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: ITestimonial[];
}) => (
  <div
    className={clsx(
      "flex flex-col gap-8 mt-8 mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
      props.className
    )}
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
  </div>
);

function Testimonials() {
  const firstCol = testimonials.slice(0, 3);
  const secondCol = testimonials.slice(3, 6);
  const thridCol = testimonials.slice(6, 9);
  return (
    <section className="bg-white">
      <div className="container px-6 mx-auto">
        {/* Header and subheader */}
        <div className="mt-8 text-center">
          <Tag text="Testimonials" />
        </div>
        <h2 className="font-gradient text-3xl text-center font-blauerSemibold mt-12">
          What our customers say
        </h2>
        <p className="subheader text-center mt-2 px-8">
          Our customer love us so much. We make them happy all the time.
        </p>
        <div className="flex justify-center gap-6">
          <TestimonialsColumn testimonials={firstCol} />
          <TestimonialsColumn
            testimonials={secondCol}
            className="hidden md:flex"
          />
          <TestimonialsColumn
            testimonials={thridCol}
            className="hidden lg:flex"
          />
        </div>
        {/* Testimonials mapping */}
      </div>
    </section>
  );
}
export { Testimonials };
