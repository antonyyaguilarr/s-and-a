"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

import type { GalleryItem } from "@/types/media";

interface MediaCardProps {
  item: GalleryItem;
  index: number;
  onOpen: (item: GalleryItem) => void;
}

export default function MediaCard({
  item,
  index,
  onOpen,
}: MediaCardProps) {
  const aspectRatio = `${item.width} / ${item.height}`;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "80px" }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.045, 0.25),
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onOpen(item)}
      aria-label={`Abrir ${item.title}`}
      className="group relative mb-3 block w-full break-inside-avoid cursor-zoom-in overflow-hidden rounded-[18px] bg-[var(--surface)] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-light)]"
      style={{ aspectRatio }}
    >
      <motion.div
        layoutId={`media-${item.id}`}
        className="absolute inset-0"
        transition={{
          type: "spring",
          stiffness: 340,
          damping: 34,
          mass: 0.85,
        }}
      >
        {item.type === "image" ? (
          <Image
            src={item.src}
            alt={item.title}
            fill
            priority={index < 4}
            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
        ) : (
          <video
            src={item.src}
            poster={item.poster}
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
        )}
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent opacity-65 transition-opacity duration-500 group-hover:opacity-90" />

      {item.type === "video" && (
        <div className="pointer-events-none absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur-xl">
          <Play size={17} fill="currentColor" />
        </div>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <h4 className="text-base font-medium tracking-[-0.02em]">
          {item.title}
        </h4>

        {item.description && (
          <p className="mt-1 max-w-md text-sm leading-5 text-white/70">
            {item.description}
          </p>
        )}

        {item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-white/55"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.button>
  );
}