import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function Hero({ children, className }: Props) {
  return (
    <h1
      className={cn(
        "font-semibold tracking-[-0.07em]",
        "text-5xl sm:text-7xl lg:text-8xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function Title({ children, className }: Props) {
  return (
    <h2
      className={cn(
        "font-semibold tracking-[-0.05em]",
        "text-3xl sm:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function Subtitle({ children, className }: Props) {
  return (
    <p
      className={cn(
        "text-xl leading-relaxed text-secondary",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Caption({ children, className }: Props) {
  return (
    <p
      className={cn(
        "text-xs uppercase tracking-[0.24em] text-[var(--wine-500)] font-medium",
        className
      )}
    >
      {children}
    </p>
  );
}