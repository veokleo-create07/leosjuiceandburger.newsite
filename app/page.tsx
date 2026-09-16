import { ArrowDownRight } from 'lucide-react';

import { SiteButtonLink } from '@/components/site/button-link';
import { Container } from '@/components/site/container';
import { SectionPlaceholder } from '@/components/site/section-placeholder';

const sections = [
  { id: 'hero', index: '01', title: 'Hero', tone: 'cream' },
  {
    id: 'food-experience',
    index: '02',
    title: 'Food Experience',
    tone: 'warm-white',
  },
  {
    id: 'restaurant-info',
    index: '03',
    title: 'Restaurant Info',
    tone: 'sand',
  },
  { id: 'reviews', index: '04', title: 'Reviews', tone: 'cream' },
  { id: 'gutschein', index: '05', title: 'Gutschein', tone: 'olive' },
  { id: 'final-cta', index: '06', title: 'Final CTA', tone: 'charcoal' },
] as const;

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Container className="site-header__inner">
          <a className="wordmark" href="#hero" aria-label="Leo's Juice & Burger home">
            <span>LEO&apos;S</span>
            <span className="wordmark__sub">JUICE &amp; BURGER</span>
          </a>

          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#food-experience">Menu</a>
            <a href="#restaurant-info">Visit</a>
            <a href="#reviews">Stories</a>
          </nav>

          <SiteButtonLink href="#final-cta" size="compact">
            Reserve
            <ArrowDownRight aria-hidden="true" />
          </SiteButtonLink>
        </Container>
      </header>

      <main>
        {sections.map((section) => (
          <SectionPlaceholder key={section.id} {...section} />
        ))}
      </main>

      <footer id="footer" className="site-footer">
        <Container className="site-footer__inner">
          <div>
            <p className="eyebrow eyebrow--light">07 / Footer</p>
            <p className="site-footer__mark">LEO&apos;S</p>
          </div>
          <p className="site-footer__note">Juice, burgers, good times.</p>
        </Container>
      </footer>
    </div>
  );
}
