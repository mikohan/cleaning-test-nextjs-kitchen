"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  text: string;
  className?: string;
};
export const ButtonShiny = ({ text, className }: Props) => {
  return (
    <motion.button
      className={clsx(
        "px-8 py-4 rounded-2xl relative radial-gradient text-xl font-blauerMedium",
        className
      )}
      initial={{ "--x": "100%" }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.95 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
    >
      <span className="text-white tracking-wide font-light h-full w-full block relative linear-mask">
        {text}
      </span>
      <span className="block absolute inset-0 rounded-2xl p-1 linear-overlay"></span>
    </motion.button>
  );
};
