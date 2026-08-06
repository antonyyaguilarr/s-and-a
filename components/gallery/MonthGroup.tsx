import DayGroup from "@/components/gallery/DayGroup";
import type { MonthGroup as MonthGroupType } from "@/types/media";

interface MonthGroupProps {
  group: MonthGroupType;
}

export default function MonthGroup({
  group,
}: MonthGroupProps) {
  const numberOfItems = group.days.reduce(
    (total, day) => total + day.items.length,
    0,
  );

  return (
    <section className="mt-14 first:mt-0">
      <header className="mb-8 flex items-end justify-between border-b border-white/[0.08] pb-5">
        <h3 className="text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
          {group.monthName}
        </h3>

        <span className="pb-1 text-sm text-white/35">
          {numberOfItems}{" "}
          {numberOfItems === 1 ? "recuerdo" : "recuerdos"}
        </span>
      </header>

      <div>
        {group.days.map((day) => (
          <DayGroup
            key={day.date}
            group={day}
          />
        ))}
      </div>
    </section>
  );
}