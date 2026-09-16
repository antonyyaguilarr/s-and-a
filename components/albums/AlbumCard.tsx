import Image from "next/image";
import Link from "next/link";

import type { Album } from "@/types/content";

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  return (
    <Link
      href={`/albums/${album.slug}`}
      className="group block overflow-hidden rounded-[var(--radius-lg)] border border-white/[0.08] bg-[var(--surface)] transition duration-[var(--duration-normal)] ease-[var(--ease)] hover:-translate-y-1 hover:border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-light)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={album.cover.src}
          alt={`Portada del álbum ${album.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <p className="absolute bottom-5 left-5 text-sm text-white/65">
          {album.items.length} {album.items.length === 1 ? "recuerdo" : "recuerdos"}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        <h2 className="text-2xl font-medium tracking-[-0.04em]">{album.title}</h2>
        <p className="mt-2 leading-6 text-white/45">{album.description}</p>
      </div>
    </Link>
  );
}
