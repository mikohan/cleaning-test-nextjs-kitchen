"use client";
import { motion } from "framer-motion";
import { type ReactNode } from "react";
type props = {
  children: ReactNode;
  stiffness?: number;
  damping?: number;
  type?: "button" | "submit";
  className?: string;
};

function AnimatedButton({
  children,
  stiffness = 300,
  damping = 15,
  className,
}: props) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{
        scale: 0.9,
        y: 1,
      }}
      transition={{ type: "spring", stiffness: stiffness, damping: damping }}
    >
      {children}
    </motion.div>
  );
}

export { AnimatedButton };
