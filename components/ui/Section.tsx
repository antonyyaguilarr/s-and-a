import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`mx-auto w-full max-w-[1800px] px-5 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </section>
  );
}