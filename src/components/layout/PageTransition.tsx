"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ease, duration } from "@/lib/animations";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: duration.default,
        ease: ease.smooth,
      }}
    >
      {children}
    </motion.div>
  );
}
