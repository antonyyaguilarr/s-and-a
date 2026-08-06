import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.03 }}
      transition={{
        duration: .2
      }}
      className={cn(
        "rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium transition-colors hover:bg-[var(--accent-light)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}