// Unified Motion System
// One easing, one timing system, choreographed motion

export const ease = {
  // Primary — smooth deceleration, feels luxurious
  smooth: [0.16, 1, 0.3, 1] as const,
  // Alternative — slightly snappier
  smoothOut: [0.33, 1, 0.68, 1] as const,
  // Spring config for interactive elements
  spring: { type: "spring" as const, stiffness: 300, damping: 30 },
};

export const duration = {
  micro: 0.2,     // Hover states, button feedback
  fast: 0.4,      // Quick transitions
  default: 0.6,   // Standard animations
  slow: 0.8,      // Larger elements
  slower: 1.2,    // Hero, background motion
};

// Standard fade up animation
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.default,
      ease: ease.smooth,
      delay,
    },
  }),
};

// Fade in without movement
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: duration.default,
      ease: ease.smooth,
      delay,
    },
  }),
};

// Stagger container
export const stagger = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Stagger item (used inside stagger container)
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.default,
      ease: ease.smooth,
    },
  },
};

// Scale on hover
export const scaleOnHover = {
  scale: 1.03,
  transition: {
    duration: duration.fast,
    ease: ease.smooth,
  },
};

// Slide up for overlays
export const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.fast,
      ease: ease.smooth,
    },
  },
};
