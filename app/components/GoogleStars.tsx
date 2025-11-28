import Image from "next/image";
import Star from "@/public/star.svg";

function GoogleStars() {
  return (
    <div className="inline-flex items-center">
      {new Array(5).fill(0).map((_, i) => (
        <div className="inline-flex" key={i}>
          <Image height={16} width={16} src={Star} alt="Review stars" />
        </div>
      ))}
      <div className="ml-2 text-sm font-semibold tracking-wider">
        4.99 AVERAGE RATING
      </div>
    </div>
  );
}
export { GoogleStars };
