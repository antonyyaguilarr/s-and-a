"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

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
      className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-white/10 bg-black/60 px-5 backdrop-blur-3xl sm:px-8 lg:px-10"
    >
      <div className="flex flex-col">
        <Caption>S&A</Caption>

        <span className="text-sm text-secondary">
          Nuestros recuerdos
        </span>
      </div>

      <motion.a
        href="#timeline"
        aria-label="Ir a nuestros recuerdos"
        title="Ir a nuestros recuerdos"
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.94,
        }}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-light)]"
      >
        <ArrowDown aria-hidden="true" size={18} />
      </motion.a>
    </motion.header>
  );
}
