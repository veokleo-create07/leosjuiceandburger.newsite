'use client';

import { useRef, useState } from 'react';

const galleryItems = [
  {
    id: 'burgers',
    label: 'Burger',
    description: 'Von Hand gemacht.',
    src: '/images/food-experience-kitchen.jpg',
    srcSet:
      '/images/food-experience-kitchen-800.jpg 800w, /images/food-experience-kitchen.jpg 1672w',
    alt: 'Burger werden in der offenen Küche von Leo’s frisch angerichtet',
    width: 1672,
    height: 941,
    sizes: '(max-width: 67.99rem) 82vw, 56vw',
  },
  {
    id: 'sides',
    label: 'Beilagen',
    description: 'Knusprig und goldbraun.',
    src: '/images/food-experience-fries.jpg',
    srcSet:
      '/images/food-experience-fries-640.jpg 640w, /images/food-experience-fries.jpg 1024w',
    alt: 'Knusprige, frisch zubereitete Kartoffelspalten',
    width: 1024,
    height: 1536,
    sizes: '(max-width: 67.99rem) 82vw, 24vw',
  },
  {
    id: 'fresh-juices',
    label: 'Säfte',
    description: 'Frisch gepresst.',
    src: '/images/food-experience-drinks.jpg',
    srcSet:
      '/images/food-experience-drinks-640.jpg 640w, /images/food-experience-drinks.jpg 1145w',
    alt: 'Ein orangefarbener und ein grüner frisch gepresster Saft',
    width: 1145,
    height: 1374,
    sizes: '(max-width: 67.99rem) 82vw, 24vw',
  },
] as const;

export function FoodGallery() {
  const [activeId, setActiveId] = useState<(typeof galleryItems)[number]['id']>('burgers');
  const trackRef = useRef<HTMLDivElement>(null);

  function selectItem(id: (typeof galleryItems)[number]['id']) {
    setActiveId(id);

    if (window.matchMedia('(max-width: 67.99rem)').matches) {
      const panel = trackRef.current?.querySelector<HTMLElement>(`[data-food-panel="${id}"]`);
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      trackRef.current?.scrollTo({
        left: panel?.offsetLeft ?? 0,
        behavior: reduceMotion ? 'auto' : 'smooth',
      });
    }
  }

  return (
    <div className="food-gallery">
      <div className="food-gallery__nav" aria-label="Food categories">
        {galleryItems.map((item) => (
          <button
            aria-pressed={activeId === item.id}
            className="food-gallery__nav-button"
            data-active={activeId === item.id}
            key={item.id}
            onClick={() => selectItem(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="food-gallery__track" ref={trackRef}>
        {galleryItems.map((item) => (
          <article
            className="food-gallery__panel"
            data-active={activeId === item.id}
            data-food-panel={item.id}
            key={item.id}
          >
            <button
              aria-pressed={activeId === item.id}
              className="food-gallery__select"
              onClick={() => selectItem(item.id)}
              type="button"
              aria-label={`${item.label} anzeigen`}
            >
              <span className="food-gallery__media">
                {/* oxlint-disable-next-line next/no-img-element -- responsive local campaign photography */}
                <img
                  src={item.src}
                  srcSet={item.srcSet}
                  sizes={item.sizes}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="food-gallery__caption">
                <strong>{item.label}</strong>
                <span>{item.description}</span>
              </span>
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
