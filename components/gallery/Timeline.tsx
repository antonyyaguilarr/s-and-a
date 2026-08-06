import MonthGroup from "@/components/gallery/MonthGroup";

import type {
  GalleryItem,
  YearGroup,
} from "@/types/media";

interface TimelineProps {
  groups: YearGroup[];
  onOpen: (item: GalleryItem) => void;
}

export default function Timeline({
  groups,
  onOpen,
}: TimelineProps) {
  if (groups.length === 0) {
    return (
      <div className="flex min-h-[45vh] items-center justify-center text-center">
        <div>
          <p className="text-xl font-medium">
            Todavía estamos escribiendo nuestra historia.
          </p>

          <p className="mt-2 text-sm text-white/40">
            Los próximos recuerdos aparecerán aquí.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-28">
      {groups.map((year) => (
        <section
          key={year.year}
          id={`year-${year.year}`}
          className="mt-20 first:mt-0"
        >
          <div className="mb-12 flex items-center gap-6">
            <h2 className="text-6xl font-semibold tracking-[-0.075em] sm:text-7xl">
              {year.year}
            </h2>

            <div className="h-px flex-1 bg-gradient-to-r from-[var(--accent)]/70 to-transparent" />
          </div>

          {year.months.map((month) => (
            <MonthGroup
              key={`${year.year}-${month.month}`}
              group={month}
              onOpen={onOpen}
            />
          ))}
        </section>
      ))}
    </div>
  );
}