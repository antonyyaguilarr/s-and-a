import { notFound } from "next/navigation";

import ContentPageHeader from "@/components/content/ContentPageHeader";
import GalleryClient from "@/components/gallery/GalleryClient";
import Header from "@/components/layout/Header";
import Section from "@/components/ui/Section";
import galleryData from "@/content/data/gallery.json";
import { getAlbumBySlug, getAlbums } from "@/lib/content";
import { groupGalleryItems } from "@/lib/gallery";
import type { GalleryItem } from "@/types/media";

export function generateStaticParams() {
  return getAlbums(galleryData as GalleryItem[]).map((album) => ({
    slug: album.slug,
  }));
}

export default async function AlbumPage(props: PageProps<"/albums/[slug]">) {
  const { slug } = await props.params;
  const album = getAlbumBySlug(galleryData as GalleryItem[], slug);

  if (!album) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <Section>
          <ContentPageHeader
            eyebrow="Álbum"
            title={album.title}
            description={album.description}
          />
          <GalleryClient
            groups={groupGalleryItems(album.items)}
            items={album.items}
          />
        </Section>
      </main>
    </>
  );
}
