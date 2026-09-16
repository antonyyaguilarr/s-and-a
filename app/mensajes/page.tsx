import ContentPageHeader from "@/components/content/ContentPageHeader";
import EmptyContent from "@/components/content/EmptyContent";
import Header from "@/components/layout/Header";
import Section from "@/components/ui/Section";
import messagesData from "@/content/data/messages.json";
import type { MemoryMessage } from "@/types/content";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function MessagesPage() {
  const messages = messagesData as MemoryMessage[];

  return (
    <>
      <Header />
      <main>
        <Section>
          <ContentPageHeader
            eyebrow="Palabras guardadas"
            title="Mensajes"
            description="Cartas, poemas y pequeñas palabras que también merecen quedarse cerca."
          />
          {messages.length > 0 ? (
            <div className="grid gap-5 pb-28 lg:grid-cols-2">
              {messages.map((message) => (
                <article
                  key={message.id}
                  className="rounded-[var(--radius-lg)] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8"
                >
                  <p className="text-sm capitalize text-[var(--accent-light)]">
                    {formatDate(message.date)}
                  </p>
                  <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em]">
                    {message.title}
                  </h2>
                  <p className="mt-5 whitespace-pre-line leading-7 text-white/65">
                    {message.body}
                  </p>
                  {message.tags.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {message.tags.map((tag) => (
                        <span key={tag} className="text-sm text-white/40">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <EmptyContent
              title="Aquí vivirán las palabras importantes"
              description="Cuando guardes una carta, poema o mensaje, aparecerá en este espacio con el cuidado que merece."
            />
          )}
        </Section>
      </main>
    </>
  );
}
