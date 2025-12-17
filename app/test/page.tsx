"use client";
import Image from "next/image";
import HeroImageDesktop from "@/public/images/hero_ol2_768.png";
import { AvatarGroup } from "../components/SmallComponents/AvatarGroup";
import { GoogleStars } from "../components/GoogleStars";
// import { VideoComponent } from "../components/VideoComponent";
import { ButtonShiny } from "../components/SmallComponents/ButtonShiny";
import { AnimatedButton } from "../components/SmallComponents/AnimatedButton";
import { sendEmail } from "@/lib/resend";
import { useActionState, useState } from "react";
import { FormState } from "@/lib/resend";

export default function AboutPage() {
  const [state, action, isLoading] = useActionState<FormState, FormData>(
    sendEmail,
    {}
  );

  return (
    <div className="container max-w-4xl mx-auto">
      <div className="flex justify-center items-center h-32 w-full border border-amber-100">
        <ButtonShiny text="Schedule cleaning" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="w-full md:w-1/2">
          <div>
            <GoogleStars
              starsCount={5}
              rating="4.99"
              text="AVERAGE RATING"
              inline={false}
            />
          </div>
          <div>
            <AvatarGroup />
          </div>
          <h1>About Us</h1>
          <p>This is the about page content.</p>
        </div>
        <div className="relative w-full md:w-1/2 h-[350px] md:h-[600px]">
          <Image
            fetchPriority="high"
            src={HeroImageDesktop}
            priority
            alt="some"
            sizes="(max-width: 250px) 140px, (max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw"
            // sizes="(min-width: 780px) 479px, 100vw"
            className="object-cover"
            fill
          />
        </div>
        <div>{/* <VideoComponent source="videos/test.mp4" autoPlay /> */}</div>
        <div className="container p-32">
          <form id="form" action={action}>
            <div className="flex flex-col gap-8">
              <div className="w-full max-w-sm min-w-[200px]">
                <div className="relative">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  />
                  <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                    Your Phone
                  </label>
                </div>
              </div>
              <div className="w-full max-w-sm min-w-[200px]">
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  />
                  <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                    Your Email
                  </label>
                </div>
              </div>
              <div className="w-full max-w-sm min-w-[200px]">
                <div className="relative">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  />
                  <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                    Your Name
                  </label>
                </div>
              </div>
            </div>
            <AnimatedButton className="btn" type="submit">
              {isLoading ? (
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Send"
              )}
            </AnimatedButton>
            {state.error && (
              <p className="text-red-500 text-sm">{state.error}</p>
            )}
            {state.success && (
              <p className="text-green-500 text-sm">{state.message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
