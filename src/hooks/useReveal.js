import { useEffect, useRef, useState } from "react";

/**
 * Adds an "is-visible" class once the element scrolls into view.
 * Used at the section level (via <Reveal>), not per-card, so motion
 * reads as one deliberate reveal per section rather than scattered effects.
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
