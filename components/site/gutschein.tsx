'use client';

import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

import { SiteButtonLink } from '@/components/site/button-link';

type Locale = 'de' | 'en';

const copy = {
  de: {
    title: 'Gutes Essen verschenken.',
    description:
      'Ein Leo’s Gutschein für handgemachte Burger und frische Säfte – zum Verschenken und gemeinsam Genießen.',
    language: 'Sprache wählen',
    cardLabel: 'Gutschein',
    cardLine: 'Gutes Essen. Mit Liebe gemacht.',
    action: 'Gutschein kaufen',
    logoAlt: 'Leo’s Juice & Burger Logo',
  },
  en: {
    title: 'Give the gift of good food.',
    description:
      'A Leo’s gift voucher for handmade burgers and fresh juices – made for sharing a good meal.',
    language: 'Choose language',
    cardLabel: 'Gift voucher',
    cardLine: 'Good food. Made with love.',
    action: 'Buy a gift voucher',
    logoAlt: 'Leo’s Juice & Burger logo',
  },
} as const;

const voucherShopUrl = 'https://www.bon-bon.de/gutschein/leos-juice-burger-luebeck/';

export function Gutschein() {
  const [locale, setLocale] = useState<Locale>('de');
  const text = copy[locale];

  return (
    <div className="gutschein__layout">
      <div className="gutschein__copy">
        <div className="gutschein__language" aria-label={text.language}>
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
        <h2 id="gutschein-title" className="gutschein__title">
          {text.title}
        </h2>
        <p className="gutschein__text">{text.description}</p>
        <SiteButtonLink
          className="gutschein__cta"
          href={voucherShopUrl}
          target="_blank"
          rel="noreferrer"
          size="large"
        >
          {text.action}
          <ArrowUpRight aria-hidden="true" />
        </SiteButtonLink>
      </div>

      <div className="voucher-stage" aria-label={text.cardLabel}>
        <div className="voucher-card">
          <div className="voucher-card__topline">
            {/* oxlint-disable-next-line next/no-img-element -- local brand asset stays crisp at this display size */}
            <img
              src="/images/leos-logo.png"
              alt={text.logoAlt}
              width="300"
              height="290"
            />
            <span>Leo’s Juice &amp; Burger</span>
          </div>
          <div className="voucher-card__main">
            <p>{text.cardLabel}</p>
            <span>{text.cardLine}</span>
          </div>
          <div className="voucher-card__footer" aria-hidden="true">
            <span>Leo’s · Lübeck-Kücknitz</span>
            <span className="voucher-card__mark">✳</span>
          </div>
        </div>
      </div>
    </div>
  );
}
