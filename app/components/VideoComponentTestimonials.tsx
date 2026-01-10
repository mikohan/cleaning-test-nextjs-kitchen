import Image from "next/image";
import HeroImage from "@/public/images/couch/hero.jpg";
type props = {
  source: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  width?: string;
  heigh?: string;
  poster?: string;
};
export function VideoComponentTestimonials({
  source,
  autoPlay = true,
  loop = true,
  muted = true,
  width = "720",
  heigh = "1280",
  poster = "",
}: props) {
  return (
    <video
      width={width}
      height={heigh}
      preload="auto"
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      className="rounded-2xl"
      poster={poster}
    >
      <source src={source} type="video/mp4" />
      <track
        // src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
}
