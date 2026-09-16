import GalleryClient from "@/components/gallery/GalleryClient";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Section from "@/components/ui/Section";

import galleryData from "@/content/data/gallery.json";

import {
  countGalleryItems,
  groupGalleryItems,
} from "@/lib/gallery";

import type { GalleryItem } from "@/types/media";

export default function Home() {
  const items = galleryData as GalleryItem[];
  const timeline = groupGalleryItems(items);
  const totalItems = countGalleryItems(timeline);

  return (
    <>
      <Header />

      <main>
        <Hero />

        <Section className="scroll-mt-24">
          <header id="timeline" className="pb-16 pt-20 sm:pb-20 sm:pt-28">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[var(--accent-light)]">
              S&A
            </p>

            <h2 className="max-w-4xl text-5xl font-semibold tracking-[-0.07em] sm:text-7xl lg:text-8xl">
              Nuestros recuerdos
            </h2>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-white/40">
              <span>
                {totalItems}{" "}
                {totalItems === 1 ? "momento" : "momentos"}
              </span>

              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-[var(--accent)]"
              />

              <span>Una historia en fotografías</span>
            </div>
          </header>

          <GalleryClient
            groups={timeline}
            items={items}
          />
        </Section>
      </main>
    </>
  );
}
