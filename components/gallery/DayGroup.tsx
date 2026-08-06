import MediaCard from "@/components/gallery/MediaCard";

import type {
  DayGroup as DayGroupType,
  GalleryItem,
} from "@/types/media";

interface DayGroupProps {
  group: DayGroupType;
  onOpen: (item: GalleryItem) => void;
}

export default function DayGroup({
  group,
  onOpen,
}: DayGroupProps) {
  return (
    <section className="mt-8 first:mt-0">
      <div className="mb-4 flex items-end gap-3">
        <span className="text-4xl font-semibold tracking-[-0.06em] text-white">
          {group.day}
        </span>

        <span className="pb-1 text-sm text-white/35">
          {group.items.length}{" "}
          {group.items.length === 1 ? "recuerdo" : "recuerdos"}
        </span>
      </div>

      <div className="columns-1 gap-3 sm:columns-2 xl:columns-3 2xl:columns-4">
        {group.items.map((item, index) => (
          <MediaCard
            key={item.id}
            item={item}
            index={index}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  );
}