'use client';

import { useState } from 'react';

type Locale = 'de' | 'en';

const aboutCopy = {
  de: {
    label: 'Über Leo’s',
    heading: 'Gutes Essen. Mit Liebe gemacht.',
    paragraphs: [
      'Bei Leo’s kommen Burger nicht von der Stange. Wir bereiten sie von Hand zu, kombinieren sie mit frischen Zutaten und servieren dazu frische Säfte.',
      'Direkt, unkompliziert und mit Liebe gemacht – so schmeckt Leo’s in Lübeck-Kücknitz.',
    ],
    details: ['Handgemachte Burger', 'Frische Zutaten', 'Frische Säfte'],
    imageAlt: 'Restaurantbereich mit offener Küche und warmem Licht',
    imageCaption: 'Leo’s in Lübeck-Kücknitz',
    languageLabel: 'Sprache wählen',
  },
  en: {
    label: 'About Leo’s',
    heading: 'Good food. Made with love.',
    paragraphs: [
      'At Leo’s, burgers are never off the shelf. We make them by hand, pair them with fresh ingredients and serve fresh juices alongside them.',
      'Straightforward, easy-going and made with love – that is Leo’s in Lübeck-Kücknitz.',
    ],
    details: ['Handmade burgers', 'Fresh ingredients', 'Fresh juices'],
    imageAlt: 'Restaurant interior with an open kitchen and warm lighting',
    imageCaption: 'Leo’s in Lübeck-Kücknitz',
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
        <figcaption>{copy.imageCaption}</figcaption>
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
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ul className="about-leos__details">
          {copy.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
