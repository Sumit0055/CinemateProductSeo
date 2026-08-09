"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const elements = gsap.utils.toArray(".ftco-animate");
    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(elements, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set(elements, { autoAlpha: 0, y: 34 });

      elements.forEach((element, index) => {
        gsap.to(element, {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          delay: (index % 4) * 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 92%",
            once: true,
          },
        });
      });
    });

    const refreshId = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      window.cancelAnimationFrame(refreshId);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
