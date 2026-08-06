"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import { Caption } from "@/components/ui/Typography";

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
      <div className="flex flex-col">
        <Caption>S&A</Caption>

        <span className="text-sm text-secondary">
          Nuestros recuerdos
        </span>
      </div>

      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.94,
        }}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5"
      >
        <Menu size={18} />
      </motion.button>
    </motion.header>
  );
}