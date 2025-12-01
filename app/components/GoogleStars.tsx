import Image from "next/image";
import Star from "@/public/star.svg";

interface GoogleProps {
  rating: string;
  text?: string | undefined;
  starsCount: number;
  inline?: boolean | undefined;
}

function GoogleStars({ rating, text, starsCount, inline = true }: GoogleProps) {
  const rat = rating ?? "4.99";
  const cnt = starsCount ?? 5;
  const inln = inline ? "inline-flex gap-2" : "block";
  console.log(inln);

  return (
    <div className={`${inln} items-center`}>
      <div>
        {new Array(cnt).fill(0).map((_, i) => (
          <div className="inline-flex" key={i}>
            <Image height={16} width={16} src={Star} alt="Review stars" />
          </div>
        ))}
      </div>
      <div className="text-sm font-semibold tracking-wider">
        {rat} {text}
      </div>
    </div>
  );
}
export { GoogleStars };
