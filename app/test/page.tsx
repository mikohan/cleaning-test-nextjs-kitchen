import Image from "next/image";
import { Metadata } from "next";
import { VideoReviews } from "../components/VideReviews";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AboutPage() {
  return (
    <div className="container max-w-7xl mx-auto">
      <VideoReviews />
    </div>
  );
}
