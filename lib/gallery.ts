import type {
  DayGroup,
  GalleryItem,
  MonthGroup,
  YearGroup,
} from "@/types/media";

const monthFormatter = new Intl.DateTimeFormat("es-CO", {
  month: "long",
  timeZone: "UTC",
});

function parseDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);

  if (!year || !month || !day) {
    throw new Error(`Fecha inválida en gallery.json: ${date}`);
  }

  return { year, month, day };
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function groupGalleryItems(items: GalleryItem[]): YearGroup[] {
  const sortedItems = [...items].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  const years = new Map<
    number,
    Map<number, Map<number, GalleryItem[]>>
  >();

  for (const item of sortedItems) {
    const { year, month, day } = parseDate(item.date);

    if (!years.has(year)) {
      years.set(year, new Map());
    }

    const months = years.get(year)!;

    if (!months.has(month)) {
      months.set(month, new Map());
    }

    const days = months.get(month)!;

    if (!days.has(day)) {
      days.set(day, []);
    }

    days.get(day)!.push(item);
  }

  return [...years.entries()]
    .sort(([yearA], [yearB]) => yearB - yearA)
    .map(([year, months]): YearGroup => ({
      year,
      months: [...months.entries()]
        .sort(([monthA], [monthB]) => monthB - monthA)
        .map(([month, days]): MonthGroup => {
          const monthDate = new Date(Date.UTC(year, month - 1, 1));

          return {
            month,
            monthName: capitalize(monthFormatter.format(monthDate)),
            days: [...days.entries()]
              .sort(([dayA], [dayB]) => dayB - dayA)
              .map(
                ([day, dayItems]): DayGroup => ({
                  day,
                  date: `${year}-${String(month).padStart(2, "0")}-${String(
                    day,
                  ).padStart(2, "0")}`,
                  items: dayItems,
                }),
              ),
          };
        }),
    }));
}

export function countGalleryItems(groups: YearGroup[]) {
  return groups.reduce(
    (yearTotal, year) =>
      yearTotal +
      year.months.reduce(
        (monthTotal, month) =>
          monthTotal +
          month.days.reduce(
            (dayTotal, day) => dayTotal + day.items.length,
            0,
          ),
        0,
      ),
    0,
  );
}