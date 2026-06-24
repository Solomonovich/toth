"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

/**
 * Wraps each page in a subtle fade so route changes feel smooth. `template.tsx`
 * (unlike `layout.tsx`) re-mounts on every navigation, which is what drives the
 * transition.
 *
 * Intentionally opacity-only: a `transform` here would make any descendant with
 * `position: fixed` (the page's background gradients, the Back-to-Top button)
 * resolve against this wrapper instead of the viewport. Opacity does not create
 * a containing block, so fixed positioning keeps working. Opacity also animates
 * under reduced motion, which is acceptable (no vestibular motion), and rendering
 * the same element on server and client avoids any hydration mismatch.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
