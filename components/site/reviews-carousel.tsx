'use client';

import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { useRef, useState } from 'react';

type Locale = 'de' | 'en';

const reviews = [
  {
    id: 'luebeck',
    quote:
      'Wow hier hats mich umgehauen! So nettes Personal und gute Stimmung! Mein Magen ist nun nicht mehr leer und mein Herz ist voll!!',
    author: 'Ivana Masdea',
    location: {
      de: 'Leo’s Juice & Burger · Lübeck',
      en: 'Leo’s Juice & Burger · Lübeck',
    },
    address: '',
    href: "https://www.google.com/maps/search/?api=1&query=Leo's%20Juice%20%26%20Burger%20L%C3%BCbeck",
  },
  {
    id: 'hamburg',
    quote: 'Lange nicht so einen leckeren Burger gegessen!!',
    author: 'Jolina Boehme',
    location: {
      de: 'Leo’s Juice & Burger · Hamburg',
      en: 'Leo’s Juice & Burger · Hamburg',
    },
    address: 'Hemmingstedter Weg 140, 22609 Hamburg',
    href: "https://www.google.com/maps/search/?api=1&query=Leo's%20Juice%20and%20Burger%2C%20Hemmingstedter%20Weg%20140%2C%20Hamburg",
  },
  {
    id: 'kiel',
    quote:
      'Wohnen nicht weit weg und kannten es nicht. Lange nicht so gut gegessen, toll eingerichtet und super Service. Weiterso kommen bestimmt wider.',
    author: 'J Z',
    location: {
      de: 'Leo’s Juice, Bowls & Burger · Kiel',
      en: 'Leo’s Juice, Bowls & Burger · Kiel',
    },
    address: 'Schilkseer Str. 90, 24159 Kiel',
    href: "https://www.google.com/maps/search/?api=1&query=Leo's%20Juice%2C%20Bowls%20%26%20Burger%2C%20Schilkseer%20Str.%2090%2C%20Kiel",
  },
] as const;

const copy = {
  de: {
    eyebrow: 'Google Rezensionen',
    heading: 'Das sagen unsere Gäste',
    languageLabel: 'Sprache wählen',
    score: 'Essen, Service und Atmosphäre: jeweils 5 von 5',
    original: 'Originale Google Rezension',
    viewOnGoogle: 'Auf Google ansehen',
    previous: 'Vorherige Rezension',
    next: 'Nächste Rezension',
    reviewLabel: 'Rezension {current} von {total}',
  },
  en: {
    eyebrow: 'Google reviews',
    heading: 'What our guests say',
    languageLabel: 'Choose language',
    score: 'Food, service and atmosphere: 5 out of 5 each',
    original: 'Original Google review',
    viewOnGoogle: 'View on Google',
    previous: 'Previous review',
    next: 'Next review',
    reviewLabel: 'Review {current} of {total}',
  },
} as const;

export function ReviewsCarousel() {
  const [locale, setLocale] = useState<Locale>('de');
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const review = reviews[index];
  const ui = copy[locale];

  function showReview(nextIndex: number) {
    setIndex((nextIndex + reviews.length) % reviews.length);
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    startX.current = event.clientX;
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (startX.current === null) return;

    const distance = event.clientX - startX.current;
    startX.current = null;

    if (Math.abs(distance) < 42) return;
    showReview(distance > 0 ? index - 1 : index + 1);
  }

  return (
    <div className="review-carousel">
      <header className="review-carousel__header">
        <div>
          <p className="review-carousel__eyebrow">{ui.eyebrow}</p>
          <h2 id="reviews-title">{ui.heading}</h2>
        </div>
        <div className="review-carousel__language" aria-label={ui.languageLabel}>
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
      </header>

      <div
        className="review-carousel__stage"
        aria-label={ui.reviewLabel
          .replace('{current}', String(index + 1))
          .replace('{total}', String(reviews.length))}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          startX.current = null;
        }}
      >
        <article className="review-carousel__review" key={review.id}>
          <div className="review-carousel__quote-mark" aria-hidden="true">
            “
          </div>
          <div className="review-carousel__stars" aria-label={ui.score}>
            <span aria-hidden="true">★★★★★</span>
            <small>{ui.score}</small>
          </div>
          <blockquote lang="de">{review.quote}</blockquote>
          <footer className="review-carousel__meta">
            <div>
              <strong>{review.author}</strong>
              <span>{ui.original}</span>
            </div>
            <div className="review-carousel__place">
              <MapPin aria-hidden="true" />
              <span>
                <strong>{review.location[locale]}</strong>
                {review.address && <small>{review.address}</small>}
              </span>
            </div>
            <a href={review.href} target="_blank" rel="noreferrer">
              {ui.viewOnGoogle}
            </a>
          </footer>
        </article>
      </div>

      <nav className="review-carousel__controls" aria-label="Review controls">
        <button
          type="button"
          onClick={() => showReview(index - 1)}
          aria-label={ui.previous}
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <div className="review-carousel__dots" aria-label={ui.reviewLabel
          .replace('{current}', String(index + 1))
          .replace('{total}', String(reviews.length))}>
          {reviews.map((entry, entryIndex) => (
            <button
              type="button"
              key={entry.id}
              aria-label={ui.reviewLabel
                .replace('{current}', String(entryIndex + 1))
                .replace('{total}', String(reviews.length))}
              aria-current={entryIndex === index ? 'true' : undefined}
              onClick={() => showReview(entryIndex)}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => showReview(index + 1)}
          aria-label={ui.next}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </nav>
    </div>
  );
}
