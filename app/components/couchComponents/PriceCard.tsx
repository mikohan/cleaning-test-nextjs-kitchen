import Image from "next/image";
import { IPrice } from "@/app/data";

export const PriceCard = ({ img, category, items }: IPrice) => (
  <div className="bg-white rounded-4xl p-4 shadow-xl">
    {/* Image and absolute text */}
    <div className="h-70 w-auto relative">
      <Image
        priority
        fetchPriority="high"
        className="object-cover rounded-4xl"
        fill
        alt={category}
        src={img}
        sizes="(max-width: 768px) 350px, (max-width: 1200px) 768px, 25vw"
      />
      <div className="absolute bottom-8 left-8  py-2 px-4  rounded-3xl bg-white/40">
        <p className="font-blauerRegular font-gradient text-xl md:text-2xl">
          {category}
        </p>
      </div>
    </div>
    {items.map((item, i) => (
      <div
        key={i}
        className="my-4 flex gap-4 items-center justify-between bg-gray-200 rounded-2xl py-4 px-8"
      >
        <div className="text-2xl font-blauerMedium font-gradient">
          {item.item}
        </div>
        <div className="flex gap-4 items-center">
          <div className="text-2xl text-[#47CBA7]">
            <span>$</span>
            {item.priceAfter}
          </div>
          <div className="line-through text-couchShadow">
            <span>$</span>
            {item.priceBefore}
          </div>
        </div>
      </div>
    ))}
  </div>
);
