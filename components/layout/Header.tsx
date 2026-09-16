"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Caption } from "@/components/ui/Typography";

const navigationItems = [
  { href: "/", label: "Inicio" },
  { href: "/albums", label: "Álbumes" },
  { href: "/mensajes", label: "Mensajes" },
  { href: "/historia", label: "Historia" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <Link
        href="/"
        className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-light)]"
      >
        <div className="flex flex-col">
          <Caption>S&A</Caption>

          <span className="text-sm text-secondary">
            Nuestros recuerdos
          </span>
        </div>
      </Link>

      <nav aria-label="Navegación principal" className="hidden items-center gap-1 md:flex">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-2 text-sm text-white/55 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-light)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="md:hidden">
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-light)]"
        >
          {isMenuOpen ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Navegación principal"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-5 top-[4.5rem] w-52 rounded-[var(--radius-md)] border border-white/10 bg-[var(--surface)] p-2 shadow-[var(--shadow-soft)] sm:right-8"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-white/65 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-light)]"
                >
                  {item.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
