import Image from "next/image";
import DoneIcon from "@/public/images/couch/done.svg";
import ShieldIcon from "@/public/images/couch/sheild.svg";
import WalletdIcon from "@/public/images/couch/wallet.svg";
import { Tag } from "../SmallComponents/Tag";
import ReviewsMeImage from "@/public/images/couch/me-rewiew-cropped.png";

export const WhyUs = () => {
  return (
    <section className="bg-gradient pb-16 md:pb-32">
      <div className="container px-6 mx-auto">
        {/* Vertical flex for all boxes on the page. */}
        <div className="flex flex-col justify-center items-center mt-8">
          <Tag text="Safe for Pets and Children" />
          <h2 className="mt-12 text-3xl md:text-5xl font-gradient font-blauerSemibold text-center font-gradient">
            Why us
          </h2>
          <h3 className="subheader text-center mt-2">
            Helped 1000+ families - fast, safe, professional
          </h3>
          {/* Box for bulleted list */}
          <div className="md:flex md:flex-row md:gap-16 md:mt-16 max-w-5xl">
            {/* Box for each bullet header and box */}
            <div className="flex flex-col gap-2 items-center justify-center mt-8">
              <div className="inline-flex gap-4 items-center">
                <Image alt="Done icon" src={DoneIcon} height={24} width={24} />
                <h3 className="font-blauerMedium text-xl text-couchDarkBlue font-gradient">
                  Best Price Guarantee
                </h3>
              </div>
              <p className="font-blauerRegular text-couchShadow">
                Find service with everything included for less and we’ll beat
                it.
              </p>
            </div>
            {/* Box for each bullet header and box */}
            <div className="flex flex-col gap-2 items-center justify-center mt-8">
              <div className="inline-flex gap-4 items-center">
                <Image
                  alt="Shield icon"
                  src={ShieldIcon}
                  height={24}
                  width={24}
                  placeholder="blur"
                />
                <h3 className="font-blauerMedium text-xl text-couchDarkBlue font-gradient">
                  Safe for Kids & Pets
                </h3>
              </div>
              <p className="font-blauerRegular text-couchShadow tracking-tight">
                Non-toxic shampoos safe as dish soap No harsh chemicals or
                residue
              </p>
            </div>
            {/* Box for each bullet header and box */}
            <div className="flex flex-col gap-2 items-center justify-center mt-8 ">
              <div className="inline-flex gap-4 items-center">
                <Image
                  alt="Wallet icon"
                  src={WalletdIcon}
                  height={24}
                  width={24}
                />
                <h3 className="font-blauerMedium text-xl text-couchDarkBlue font-gradient">
                  Warranty Promise
                </h3>
              </div>
              <p className="font-blauerRegular text-couchShadow tracking-tight">
                If stains reappear, we return and fix it for FREE.
              </p>
            </div>
          </div>
          <div className="mt-16 md:mt-32 max-w-5xl">
            <Image
              src={ReviewsMeImage}
              alt="Reviews"
              width={690}
              height={466}
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
