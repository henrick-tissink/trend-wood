import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // Our custom font sizes use text-* prefix, don't confuse with text colors
      "font-size": [
        "text-small",
        "text-body",
        "text-body-lg",
        "text-h1",
        "text-h2",
        "text-h3",
        "text-hero",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
