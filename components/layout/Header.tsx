"use client";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-white/10 bg-black/60 px-10 backdrop-blur-3xl"
    >
      <h1 className="select-none text-3xl font-semibold tracking-[-.08em]">
        S&A
      </h1>

      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: .94,
        }}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5"
      >
        <Menu size={18} />
      </motion.button>
    </motion.header>
  );
}