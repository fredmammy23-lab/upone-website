import { useEffect } from "react";

// Marks every `.reveal` element visible the first time it scrolls into view.
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
