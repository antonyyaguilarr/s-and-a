import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function IconButton({
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cn(
        "glass",
        "hover-lift",
        "rounded-full",
        "w-11",
        "h-11",
        "flex",
        "items-center",
        "justify-center",
        "transition-all",
        className
      )}
    />
  );
}