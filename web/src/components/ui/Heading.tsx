import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  level?: HeadingLevel;
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}

const sizeClasses: Record<HeadingLevel, string> = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-base",
};

export function Heading({
  level = "h2",
  as,
  children,
  className,
}: HeadingProps) {
  const Component = as || level;
  const sizeClass = sizeClasses[level];

  return (
    <Component
      className={cn("font-display font-medium text-charcoal", sizeClass, className)}
    >
      {children}
    </Component>
  );
}
