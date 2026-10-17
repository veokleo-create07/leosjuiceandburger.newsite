'use client';

import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

import { Container } from '@/components/site/container';

type Locale = 'de' | 'en';

const copy = {
  de: {
    language: 'Sprache wählen',
    navigation: 'Navigation',
    menu: 'Speisekarte',
    voucher: 'Gutschein',
    contact: 'Kontakt',
    location: 'Leo’s in Kücknitz',
    address: 'Adresse für Kücknitz wird ergänzt',
    hours: 'Öffnungszeiten werden ergänzt',
    phone: 'Telefonnummer wird ergänzt',
    socials: 'Folge Leo’s',
    legal: 'Rechtliches',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    copyright: 'Alle Rechte vorbehalten.',
    logoAlt: 'Leo’s Juice & Burger',
  },
  en: {
    language: 'Choose language',
    navigation: 'Explore',
    menu: 'Menu',
    voucher: 'Gift voucher',
    contact: 'Contact',
    location: 'Leo’s in Kücknitz',
    address: 'Kücknitz address to be added',
    hours: 'Opening hours to be added',
    phone: 'Phone number to be added',
    socials: 'Follow Leo’s',
    legal: 'Legal',
    imprint: 'Legal notice',
    privacy: 'Privacy policy',
    copyright: 'All rights reserved.',
    logoAlt: 'Leo’s Juice & Burger',
  },
} as const;

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Leo's Juice & Burger Lübeck-Kücknitz")}`;
const instagramUrl = 'https://www.instagram.com/leosjuiceandburger/';
const facebookUrl = 'https://www.facebook.com/leosjuiceandburger';
const imprintUrl = 'https://www.juiceandburger.de/impressum/';
const privacyUrl = 'https://www.juiceandburger.de/datenschutz/';

export function SiteFooter() {
  const [locale, setLocale] = useState<Locale>('de');
  const text = copy[locale];
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="site-footer">
      <Container>
        <div className="site-footer__main">
          <div className="site-footer__brand-block">
            <a className="site-footer__brand" href="#hero" aria-label={text.logoAlt}>
              {/* oxlint-disable-next-line next/no-img-element -- local brand asset */}
              <img
                src="/images/leos-logo.png"
                alt={text.logoAlt}
                width="300"
                height="290"
                loading="lazy"
                decoding="async"
              />
            </a>
            <div className="site-footer__language" aria-label={text.language}>
              {(['de', 'en'] as Locale[]).map((language) => (
                <button
                  key={language}
                  type="button"
                  aria-pressed={locale === language}
                  onClick={() => setLocale(language)}
                >
                  {language === 'de' ? 'Deutsch' : 'English'}
                </button>
              ))}
            </div>
          </div>

          <nav className="site-footer__column" aria-label={text.navigation}>
            <h2>{text.navigation}</h2>
            <a href="#menu">{text.menu}</a>
            <a href="#gutschein">{text.voucher}</a>
            <a href="#restaurant-info">{text.contact}</a>
          </nav>

          <div className="site-footer__column site-footer__location">
            <h2>{text.location}</h2>
            <a href={mapsUrl} target="_blank" rel="noreferrer">
              {text.address}
              <ArrowUpRight aria-hidden="true" />
            </a>
            <p>{text.hours}</p>
            <p>{text.phone}</p>
          </div>

          <div className="site-footer__column site-footer__socials">
            <h2>{text.socials}</h2>
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              Instagram <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={facebookUrl} target="_blank" rel="noreferrer">
              Facebook <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {year} Leo’s Juice &amp; Burger. {text.copyright}</p>
          <div className="site-footer__legal">
            <span>{text.legal}</span>
            <a href={imprintUrl} target="_blank" rel="noreferrer">{text.imprint}</a>
            <a href={privacyUrl} target="_blank" rel="noreferrer">{text.privacy}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
