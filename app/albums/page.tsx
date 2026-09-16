import AlbumCard from "@/components/albums/AlbumCard";
import ContentPageHeader from "@/components/content/ContentPageHeader";
import EmptyContent from "@/components/content/EmptyContent";
import Header from "@/components/layout/Header";
import Section from "@/components/ui/Section";
import galleryData from "@/content/data/gallery.json";
import { getAlbums } from "@/lib/content";
import type { GalleryItem } from "@/types/media";

export const metadata: Metadata = {
  title: "Álbumes | S&A",
  description: "Colecciones de recuerdos que se viven juntos.",
};

export default function AlbumsPage() {
  const albums = getAlbums(galleryData as GalleryItem[]);

  return (
    <>
      <Header />
      <main>
        <Section>
          <ContentPageHeader
            eyebrow="Colecciones"
            title="Álbumes"
            description="Otra forma de recorrer nuestra historia: recuerdos unidos por un mismo lugar, instante o sensación."
          />
          {albums.length > 0 ? (
            <div className="grid gap-5 pb-28 sm:grid-cols-2 lg:gap-7">
              {albums.map((album) => (
                <AlbumCard key={album.slug} album={album} />
              ))}
            </div>
          ) : (
            <EmptyContent
              title="Los primeros álbumes están por llegar"
              description="Cuando un recuerdo tenga álbum, aparecerá aquí junto a los demás momentos que lo acompañan."
            />
          )}
        </Section>
      </main>
    </>
  );
}
import type { Metadata } from "next";
