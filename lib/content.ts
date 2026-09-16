import type { Album, MemoryMessage, StoryEvent } from "@/types/content";
import type { GalleryItem } from "@/types/media";

function toSlug(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getAlbums(items: GalleryItem[]): Album[] {
  const groupedAlbums = new Map<string, GalleryItem[]>();

  for (const item of items) {
    if (!item.album) {
      continue;
    }

    const currentItems = groupedAlbums.get(item.album) ?? [];
    currentItems.push(item);
    groupedAlbums.set(item.album, currentItems);
  }

  return [...groupedAlbums.entries()]
    .map(([title, albumItems]) => {
      const orderedItems = [...albumItems].sort((a, b) =>
        b.date.localeCompare(a.date),
      );

      return {
        slug: toSlug(title),
        title,
        description: `${orderedItems.length} ${orderedItems.length === 1 ? "recuerdo" : "recuerdos"} para volver a vivir con calma.`,
        cover: orderedItems[0],
        items: orderedItems,
      };
    })
    .sort((a, b) => b.cover.date.localeCompare(a.cover.date));
}

export function getAlbumBySlug(items: GalleryItem[], slug: string) {
  return getAlbums(items).find((album) => album.slug === slug);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isMessage(value: unknown): value is MemoryMessage {
  return (
    isRecord(value) &&
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.body === "string" &&
    typeof value.date === "string" &&
    isStringArray(value.tags)
  );
}

function isStoryEvent(value: unknown): value is StoryEvent {
  return (
    isRecord(value) &&
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.description === "string" &&
    typeof value.date === "string" &&
    (value.location === undefined || typeof value.location === "string")
  );
}

export function getMessages(data: unknown): MemoryMessage[] {
  if (!Array.isArray(data)) {
    return [];
  }

  return data
    .filter(isMessage)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getStoryEvents(data: unknown): StoryEvent[] {
  if (!Array.isArray(data)) {
    return [];
  }

  return data
    .filter(isStoryEvent)
    .sort((a, b) => a.date.localeCompare(b.date));
}
