'use client';

import { ArrowUpRight, Clock3, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

import { SiteButtonLink } from '@/components/site/button-link';

type Locale = 'de' | 'en';

const copy = {
  de: {
    eyebrow: 'Leo’s in Lübeck-Kücknitz',
    title: 'Besuch uns in Kücknitz.',
    intro: 'Die Angaben für diesen Standort werden ergänzt.',
    address: 'Adresse',
    addressPlaceholder: 'Adresse für Kücknitz wird ergänzt',
    hours: 'Öffnungszeiten',
    hoursPlaceholder: 'Öffnungszeiten werden ergänzt',
    phone: 'Telefon',
    phonePlaceholder: 'Telefonnummer wird ergänzt',
    directions: 'Route planen',
    languageLabel: 'Sprache wählen',
    imageAlt: 'Einblick in die offene Küche von Leo’s',
  },
  en: {
    eyebrow: 'Leo’s in Lübeck-Kücknitz',
    title: 'Visit us in Kücknitz.',
    intro: 'Details for this location will be added soon.',
    address: 'Address',
    addressPlaceholder: 'Kücknitz address to be added',
    hours: 'Opening hours',
    hoursPlaceholder: 'Opening hours to be added',
    phone: 'Phone',
    phonePlaceholder: 'Phone number to be added',
    directions: 'Get directions',
    languageLabel: 'Choose language',
    imageAlt: 'A view into Leo’s open kitchen',
  },
} as const;

const kuecknitzMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Leo's Juice & Burger Lübeck-Kücknitz")}`;
const kuecknitzPhone: { display: string; number: string } | null = null;

export function RestaurantInfo() {
  const [locale, setLocale] = useState<Locale>('de');
  const text = copy[locale];

  return (
    <div className="restaurant-info__layout">
      <figure className="restaurant-info__media">
        {/* oxlint-disable-next-line next/no-img-element -- existing local restaurant photography */}
        <img
          src="/images/food-experience-kitchen.jpg"
          srcSet="/images/food-experience-kitchen-800.jpg 800w, /images/food-experience-kitchen.jpg 1672w"
          sizes="(max-width: 47.99rem) calc(100vw - 2.5rem), 48vw"
          alt={text.imageAlt}
          width="1672"
          height="941"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <div className="restaurant-info__content">
        <header className="restaurant-info__heading">
          <div className="restaurant-info__topline">
            <p className="eyebrow">{text.eyebrow}</p>
            <div className="restaurant-info__language" aria-label={text.languageLabel}>
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
          <h2 id="restaurant-info-title" className="restaurant-info__title">
            {text.title}
          </h2>
          <p className="restaurant-info__intro">{text.intro}</p>
        </header>

        <div className="restaurant-info__details">
          <div className="restaurant-info__detail">
            <MapPin aria-hidden="true" />
            <div>
              <p>{text.address}</p>
              <address>
                <a href={kuecknitzMapsUrl} target="_blank" rel="noreferrer">
                  {text.addressPlaceholder}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </address>
            </div>
          </div>
          <div className="restaurant-info__detail">
            <Clock3 aria-hidden="true" />
            <div>
              <p>{text.hours}</p>
              <span>{text.hoursPlaceholder}</span>
            </div>
          </div>
          <div className="restaurant-info__detail">
            <Phone aria-hidden="true" />
            <div>
              <p>{text.phone}</p>
              {kuecknitzPhone ? (
                <a
                  className="restaurant-info__phone"
                  href={`tel:${kuecknitzPhone.number}`}
                >
                  {kuecknitzPhone.display}
                </a>
              ) : (
                <span>{text.phonePlaceholder}</span>
              )}
            </div>
          </div>
        </div>

        <SiteButtonLink
          className="restaurant-info__cta"
          href={kuecknitzMapsUrl}
          target="_blank"
          rel="noreferrer"
          size="large"
        >
          {text.directions}
          <ArrowUpRight aria-hidden="true" />
        </SiteButtonLink>
      </div>
    </div>
  );
}
