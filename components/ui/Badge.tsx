import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full",
        "bg-white/5",
        "border border-white/10",
        "px-3 py-1.5",
        "text-xs",
        "text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}