'use client';

import { useState } from 'react';

type Locale = 'de' | 'en';

const aboutCopy = {
  de: {
    label: 'Über Leo’s',
    heading: 'Gutes Essen. Mit Liebe gemacht.',
    description: 'Handgemachte Burger, frische Zutaten und Säfte – mit Liebe gemacht in Lübeck-Kücknitz.',
    imageAlt: 'Restaurantbereich mit offener Küche und warmem Licht',
    languageLabel: 'Sprache wählen',
  },
  en: {
    label: 'About Leo’s',
    heading: 'Good food. Made with love.',
    description: 'Handmade burgers, fresh ingredients and juices – made with love in Lübeck-Kücknitz.',
    imageAlt: 'Restaurant interior with an open kitchen and warm lighting',
    languageLabel: 'Choose language',
  },
} as const;

export function AboutLeos() {
  const [locale, setLocale] = useState<Locale>('de');
  const copy = aboutCopy[locale];

  return (
    <div className="about-leos__layout">
      <figure className="about-leos__media">
        {/* oxlint-disable-next-line next/no-img-element -- responsive local restaurant photography */}
        <img
          src="/images/food-experience-restaurant.jpg"
          srcSet="/images/food-experience-restaurant-640.jpg 640w, /images/food-experience-restaurant.jpg 1024w"
          sizes="(max-width: 47.99rem) calc(100vw - 2.5rem), 52vw"
          alt={copy.imageAlt}
          width="1024"
          height="1536"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <div className="about-leos__content">
        <div className="about-leos__topline">
          <p>{copy.label}</p>
          <div className="about-leos__language" aria-label={copy.languageLabel}>
            {(['de', 'en'] as Locale[]).map((language) => (
              <button
                type="button"
                key={language}
                aria-pressed={locale === language}
                onClick={() => setLocale(language)}
              >
                {language === 'de' ? 'Deutsch' : 'English'}
              </button>
            ))}
          </div>
        </div>

        <h2 id="about-leos-title">{copy.heading}</h2>

        <div className="about-leos__body">
          <p>{copy.description}</p>
        </div>
      </div>
    </div>
  );
}
