'use client';

import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function ScrollMotion() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const sections = gsap.utils.toArray<HTMLElement>('[data-scroll-reveal]');

      sections.forEach((section) => {
        const container = section.firstElementChild as HTMLElement | null;
        const layout =
          container?.children.length === 1
            ? (container.firstElementChild as HTMLElement)
            : container;
        const content = layout ? Array.from(layout.children) : [];

        gsap.fromTo(
          content,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.1,
            clearProps: 'transform,opacity,visibility',
            scrollTrigger: {
              trigger: section,
              start: 'top 82%',
              once: true,
            },
          },
        );

        const imageFrames = section.querySelectorAll<HTMLElement>(
          '.about-leos__media, .food-gallery__media, .digital-menu__visual, .restaurant-info__media, .voucher-stage',
        );

        imageFrames.forEach((frame) => {
          gsap.fromTo(
            frame,
            { clipPath: 'inset(0 0 10% 0)' },
            {
              clipPath: 'inset(0 0 0% 0)',
              duration: 1,
              ease: 'power2.out',
              clearProps: 'clipPath',
              scrollTrigger: {
                trigger: frame,
                start: 'top 86%',
                once: true,
              },
            },
          );
        });
      });
    });

    return () => media.revert();
  }, []);

  return null;
}
