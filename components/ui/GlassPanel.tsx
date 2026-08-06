import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassPanel({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "glass rounded-[28px] p-6",
        className
      )}
    >
      {children}
    </div>
  );
}