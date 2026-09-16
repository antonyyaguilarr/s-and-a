import ContentPageHeader from "@/components/content/ContentPageHeader";
import EmptyContent from "@/components/content/EmptyContent";
import Header from "@/components/layout/Header";
import Section from "@/components/ui/Section";
import storyData from "@/content/data/story.json";
import type { StoryEvent } from "@/types/content";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function StoryPage() {
  const events = storyData as StoryEvent[];

  return (
    <>
      <Header />
      <main>
        <Section>
          <ContentPageHeader
            eyebrow="Capítulos"
            title="Nuestra historia"
            description="Los momentos que marcaron el camino, incluso cuando no quedaron retratados en una fotografía."
          />
          {events.length > 0 ? (
            <ol className="relative ml-3 border-l border-white/10 pb-28 pl-8 sm:ml-6 sm:pl-12">
              {events.map((event) => (
                <li key={event.id} className="relative pb-14 last:pb-0">
                  <span className="absolute -left-[2.34rem] top-2 h-3 w-3 rounded-full border-2 border-[var(--background)] bg-[var(--accent-light)] sm:-left-[3.34rem]" />
                  <p className="text-sm capitalize text-[var(--accent-light)]">
                    {formatDate(event.date)}
                  </p>
                  <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em]">
                    {event.title}
                  </h2>
                  <p className="mt-3 max-w-xl leading-7 text-white/55">
                    {event.description}
                  </p>
                  {event.location && (
                    <p className="mt-3 text-sm text-white/35">{event.location}</p>
                  )}
                </li>
              ))}
            </ol>
          ) : (
            <EmptyContent
              title="La historia apenas comienza"
              description="Los capítulos importantes aparecerán aquí para acompañar las fotografías y las palabras."
            />
          )}
        </Section>
      </main>
    </>
  );
}
