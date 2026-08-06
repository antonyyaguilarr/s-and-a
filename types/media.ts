export type MediaType = "image" | "video";

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  date: string;
  album?: string;
  type: MediaType;
  src: string;
  poster?: string;
  width: number;
  height: number;
  location?: string;
  tags: string[];
}

export interface DayGroup {
  day: number;
  date: string;
  items: GalleryItem[];
}

export interface MonthGroup {
  month: number;
  monthName: string;
  days: DayGroup[];
}

export interface YearGroup {
  year: number;
  months: MonthGroup[];
}