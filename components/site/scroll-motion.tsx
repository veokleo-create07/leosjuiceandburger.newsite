'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function ScrollMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const sections = gsap.utils.toArray<HTMLElement>('[data-scroll-reveal]');

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0.72, y: 10 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.52,
            ease: 'power2.out',
            clearProps: 'transform,opacity,visibility',
            scrollTrigger: {
              trigger: section,
              start: 'top 88%',
              once: true,
            },
          },
        );
      });
    });

    return () => media.revert();
  }, []);

  return null;
}
