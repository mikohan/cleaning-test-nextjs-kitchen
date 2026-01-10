"use client";
import Image from "next/image";
import HeroImage from "@/public/images/couch/hero.jpg";
import { useRef, useState } from "react";
import PlayIcon from "@/public/images/couch/videoIcon.png";
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
  poster,
}: props) {
  const vid = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if (vid.current) {
      if (isPlaying) {
        vid.current.pause();
      } else {
        vid.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="relative">
      <video
        ref={vid}
        width={width}
        height={heigh}
        preload="auto"
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        className="rounded-2xl"
        poster={poster ? poster : undefined}
      >
        <source src={source} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-6 right-6 w-24 h-24">
        <Image alt="button play" src={PlayIcon} onClick={handlePlay} />
      </div>
    </div>
  );
}
