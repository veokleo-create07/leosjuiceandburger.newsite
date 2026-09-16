import { ArrowDownRight, ArrowUpRight, Smartphone, Ticket } from 'lucide-react';

import { SiteButtonLink } from '@/components/site/button-link';
import { Container } from '@/components/site/container';
import { SectionPlaceholder } from '@/components/site/section-placeholder';

const sections = [
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
          <a
            className="wordmark"
            href="#hero"
            aria-label="Leo's Juice & Burger home"
          >
            {/* oxlint-disable-next-line next/no-img-element -- local brand asset renders without vinext image runtime overhead */}
            <img
              className="brand-logo brand-logo--nav"
              src="/images/leos-logo.png"
              alt="Leo's Juice & Burger"
              width="300"
              height="290"
            />
          </a>

          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#food-experience">Menu</a>
            <a href="#restaurant-info">Visit</a>
            <a href="#reviews">Stories</a>
          </nav>

          <SiteButtonLink href="#restaurant-info" size="compact">
            Book
            <ArrowDownRight aria-hidden="true" />
          </SiteButtonLink>
        </Container>
      </header>

      <main>
        <section id="hero" className="hero" aria-labelledby="hero-title">
          <Container className="hero__inner">
            <div className="hero__media" aria-hidden="true">
              {/* oxlint-disable-next-line next/no-img-element -- avoids a vinext next/image runtime conflict */}
              <img
                className="hero__image"
                src="/images/leos-hero-burger.png"
                alt=""
              />
              <span className="hero__media-label">
                Juice / Burger / Leo&apos;s
              </span>
            </div>

            <div className="hero__copy">
              <div className="hero__brand">
                {/* oxlint-disable-next-line next/no-img-element -- local brand asset renders without vinext image runtime overhead */}
                <img
                  className="brand-logo brand-logo--hero"
                  src="/images/leos-logo.png"
                  alt="Leo's Juice & Burger"
                  width="300"
                  height="290"
                />
              </div>
              <h1 id="hero-title" className="hero__title">
                <span>Big flavour.</span>
                <span>Zero small talk.</span>
              </h1>
            </div>

            <div className="hero__actions" aria-label="Ways to visit Leo's">
              <SiteButtonLink
                className="hero__action hero__action--1"
                href="#restaurant-info"
                size="large"
              >
                Book a Table
                <ArrowUpRight aria-hidden="true" />
              </SiteButtonLink>
              <SiteButtonLink
                className="hero__action hero__action--2"
                href="#food-experience"
                size="large"
                variant="outline"
              >
                Order in App
                <Smartphone aria-hidden="true" />
              </SiteButtonLink>
              <SiteButtonLink
                className="hero__action hero__action--3"
                href="#gutschein"
                size="large"
                variant="text"
              >
                Gutschein
                <Ticket aria-hidden="true" />
              </SiteButtonLink>
            </div>

            <p className="hero__index" aria-hidden="true">
              01
            </p>
          </Container>
        </section>

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
