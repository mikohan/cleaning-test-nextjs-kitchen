"use client";
import { motion } from "framer-motion";
export const ButtonShiny = () => {
  return (
    <motion.button
      className="px-8 py-4 rounded-2xl relative radial-gradient text-xl font-blauerMedium"
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
        Start now
      </span>
      <span className="block absolute inset-0 rounded-2xl p-1 linear-overlay"></span>
    </motion.button>
  );
};
