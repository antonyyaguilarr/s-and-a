interface EmptyContentProps {
  title: string;
  description: string;
}

export default function EmptyContent({
  title,
  description,
}: EmptyContentProps) {
  return (
    <section className="flex min-h-[32vh] items-center justify-center rounded-[var(--radius-xl)] border border-white/[0.08] bg-white/[0.02] px-6 text-center">
      <div className="max-w-md">
        <h2 className="text-2xl font-medium tracking-[-0.04em]">{title}</h2>
        <p className="mt-3 leading-7 text-white/45">{description}</p>
      </div>
    </section>
  );
}
