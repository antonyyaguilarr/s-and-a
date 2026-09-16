import type { GalleryItem } from "@/types/media";

export interface Album {
  slug: string;
  title: string;
  description: string;
  cover: GalleryItem;
  items: GalleryItem[];
}

export interface MemoryMessage {
  id: string;
  title: string;
  body: string;
  date: string;
  tags: string[];
}

export interface StoryEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  location?: string;
}
