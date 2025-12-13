"use client";
import PetsKids1 from "@/public/images/couch/PetsKids-1.png";
import PetsKids2 from "@/public/images/couch/PetsKids-2.png";
import PetsKids3 from "@/public/images/couch/PetsKids-3.png";
import PetsKids4 from "@/public/images/couch/PetsKids.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => (
  <div>
    <div className="container">
      <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black,transparent)] py-4 md:py-8">
        <motion.div
          className="flex gap-12 flex-none pr-12"
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <Image
            alt="PetsKidsImage"
            src={PetsKids1}
            className="perks-ticker-image"
            width={415}
            height={64}
          />
          <Image
            alt="PetsKidsImage"
            src={PetsKids2}
            className="perks-ticker-image"
            width={311}
            height={64}
          />
          <Image
            alt="PetsKidsImage"
            src={PetsKids3}
            className="perks-ticker-image"
            width={311}
            height={64}
          />
          <Image
            alt="PetsKidsImage"
            src={PetsKids4}
            className="perks-ticker-image"
            width={311}
            height={64}
          />
          <Image
            alt="PetsKidsImage"
            src={PetsKids1}
            className="perks-ticker-image"
            width={415}
            height={64}
          />
          <Image
            alt="PetsKidsImage"
            src={PetsKids2}
            className="perks-ticker-image"
            width={311}
            height={64}
          />
          <Image
            alt="PetsKidsImage"
            src={PetsKids3}
            className="perks-ticker-image"
            width={311}
            height={64}
          />
          <Image
            alt="PetsKidsImage"
            src={PetsKids4}
            className="perks-ticker-image"
            width={311}
            height={64}
          />
        </motion.div>
      </div>
    </div>
  </div>
);
