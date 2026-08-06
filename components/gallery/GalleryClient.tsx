"use client";

import { useMemo, useState } from "react";

import Timeline from "@/components/gallery/Timeline";
import MediaViewer from "@/components/viewer/MediaViewer";

import type { GalleryItem, YearGroup } from "@/types/media";

interface GalleryClientProps {
  groups: YearGroup[];
  items: GalleryItem[];
}

export default function GalleryClient({
  groups,
  items,
}: GalleryClientProps) {
  const orderedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        const dateComparison = b.date.localeCompare(a.date);

        if (dateComparison !== 0) {
          return dateComparison;
        }

        return a.id.localeCompare(b.id);
      }),
    [items],
  );

  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    null,
  );

  function openItem(item: GalleryItem) {
    const index = orderedItems.findIndex(
      (currentItem) => currentItem.id === item.id,
    );

    if (index >= 0) {
      setSelectedIndex(index);
    }
  }

  function closeViewer() {
    setSelectedIndex(null);
  }

  return (
    <>
      <Timeline groups={groups} onOpen={openItem} />

      <MediaViewer
        items={orderedItems}
        selectedIndex={selectedIndex}
        onIndexChange={setSelectedIndex}
        onClose={closeViewer}
      />
    </>
  );
}