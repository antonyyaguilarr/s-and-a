"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type ButtonProps = HTMLMotionProps<"button">;

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}