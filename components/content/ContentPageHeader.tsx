import type { ReactNode } from "react";

interface ContentPageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export default function ContentPageHeader({
  eyebrow,
  title,
  description,
  children,
}: ContentPageHeaderProps) {
  return (
    <header className="max-w-3xl pb-14 pt-16 sm:pb-20 sm:pt-24">
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--accent-light)]">
        {eyebrow}
      </p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">
        {title}
      </h1>
      <p className="mt-6 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
        {description}
      </p>
      {children}
    </header>
  );
}
