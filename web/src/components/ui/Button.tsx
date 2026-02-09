import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light" | "outline-light";
  size?: "default" | "small" | "large";
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const baseStyles =
  "inline-flex items-center justify-center font-body font-medium transition-all duration-medium ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-forest hover:bg-moss active:bg-moss/90 text-cream",
  secondary:
    "bg-transparent border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream",
  ghost:
    "bg-transparent text-charcoal hover:bg-hover",
  light:
    "bg-cream text-charcoal hover:bg-white active:bg-cream/90",
  "outline-light":
    "bg-transparent border border-cream text-cream hover:bg-cream hover:text-charcoal",
};

const sizes = {
  small: "px-4 py-2 text-small",
  default: "px-6 py-3 text-body",
  large: "px-8 py-4 text-body-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
