import Image from "next/image";
import { IPrice } from "@/app/data/data";

export const PriceCard = ({ img, category, items }: IPrice) => {
  const discount: string = process.env.NEXT_PUBLIC_PRICE_AFTER_DISCOUNT || "0";
  const discountNumber = parseFloat(discount);
  return (
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
          sizes="(min-width: 1280px) 302px, 301px"
        />
        <div className="absolute bottom-8 left-8  py-2 px-4  rounded-3xl bg-white/40">
          <p className="font-blauerRegular font-gradient text-xl md:text-2xl">
            {category}
          </p>
        </div>
      </div>
      {items.map(function (item, i) {
        let priceBefore = item.priceBefore;
        let priceAfter = item.priceAfter;
        if (discountNumber) {
          priceBefore = priceBefore - priceBefore * discountNumber;
          priceAfter = priceAfter - priceAfter * discountNumber;
        }

        return (
          <div
            key={i}
            className="my-4 flex gap-4 items-center justify-between bg-gray-200 rounded-2xl py-4 px-8"
          >
            <div className="text-2xl font-blauerMedium font-gradient">
              {item.item}
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-2xl text-teal-800">
                <span>$</span>
                {priceAfter}
              </div>
              <div className="line-through text-couchShadow">
                <span>$</span>
                {priceBefore}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
