import { ArrowDown } from "lucide-react";

import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="hero relative flex min-h-[calc(90svh-5rem)] items-center overflow-hidden"
    >
      <div aria-hidden="true" className="hero-glow hero-glow--primary" />
      <div aria-hidden="true" className="hero-glow hero-glow--secondary" />

      <Section className="relative z-10">
        <div className="max-w-4xl py-20 sm:py-24 lg:py-32">
          <p className="hero-enter hero-enter--eyebrow text-sm font-medium uppercase tracking-[0.22em] text-[var(--accent-light)]">
            Un lugar para nosotros
          </p>

          <h1
            id="hero-title"
            className="hero-enter hero-enter--title mt-5 text-7xl font-semibold tracking-[-0.09em] sm:text-8xl lg:text-[10rem] lg:leading-[0.9]"
          >
            S&amp;A
          </h1>

          <p className="hero-enter hero-enter--subtitle mt-8 text-2xl font-medium tracking-[-0.04em] text-white/90 sm:text-3xl">
            Cada recuerdo tiene su lugar.
          </p>

          <p className="hero-enter hero-enter--description mt-4 max-w-lg text-base leading-7 text-white/50 sm:text-lg">
            Un rincón íntimo para volver a los momentos que queremos conservar para siempre.
          </p>

          <a
            href="#timeline"
            className="hero-enter hero-enter--scroll mt-12 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/70 transition duration-[var(--duration-normal)] ease-[var(--ease)] hover:border-white/20 hover:bg-white/[0.07] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-light)]"
          >
            Explorar recuerdos
            <ArrowDown aria-hidden="true" size={17} />
          </a>
        </div>
      </Section>
    </section>
  );
}
