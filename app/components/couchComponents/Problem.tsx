import ProblemImage1 from "@/public/images/couch/problem1.jpg";
import ProblemImage2 from "@/public/images/couch/problem2.jpg";
import ProblemImage3 from "@/public/images/couch/problem3.jpg";
import Image from "next/image";

const problems = [
  {
    text: "Got a dirty, smelly couch? We make it look new—saving you money and giving it years more life.",
    img: ProblemImage1,
  },
  {
    text: "Spills and stains on your couch? We clean it right—removing mess and smells fast, so it lasts longer.",
    img: ProblemImage2,
  },
  {
    text: "Pet mess on the couch? We remove stains and odors fast—restoring freshness and protecting it for years.",
    img: ProblemImage3,
  },
];
export const Problem = () => (
  <section className="bg-gradient">
    <div className="px-6 container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="mt-8 inline-flex justify-center w-64 py-2 px-4 border border-couchDarkBlue/50 rounded-2xl text-couchDarkBlue/50">
          Problems we solve
        </div>
        <h2 className="mt-8 text-3xl md:text-5xl font-gradient font-blauerSemibold text-center tracking-tight">
          Think your couch is ruined?
        </h2>
        <h3 className="subheader text-center mt-4">
          We bring it back—fast, safe, professional
        </h3>
        <div className="mt-16 flex flex-col md:flex-row md:gap-8 font-blauerRegular">
          {problems.map((obj, i) => (
            <div key={i} className="">
              <div className="relative h-50 w-full mb-4">
                <Image
                  alt={`Image of problem we solve-${i}`}
                  src={obj.img}
                  className="w-full h-auto object-cover rounded-2xl"
                  fill
                />
              </div>
              <p className="text-couchShadow text-center mb-16">{obj.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
