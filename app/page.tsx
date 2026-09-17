import { ArrowDownRight, ArrowUpRight, Smartphone, Ticket } from 'lucide-react';

import { SiteButtonLink } from '@/components/site/button-link';
import { Container } from '@/components/site/container';
import { SectionPlaceholder } from '@/components/site/section-placeholder';

const sections = [
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

        <section
          id="food-experience"
          className="food-experience"
          aria-labelledby="food-experience-title"
        >
          <Container className="food-experience__intro">
            <p className="eyebrow">02 / Food Experience</p>
            <h2 id="food-experience-title" className="food-experience__title">
              Built for
              <span>the crave.</span>
            </h2>
            <p className="food-experience__note">Hot. Cold. Always fresh.</p>
          </Container>

          <div className="food-experience__gallery">
            <figure className="food-shot food-shot--burger">
              {/* oxlint-disable-next-line next/no-img-element -- static campaign image */}
              <img
                src="/images/leos-hero-burger.png"
                alt="A towering double smash burger with melted cheese and crisp lettuce"
              />
              <figcaption>01 / The smash</figcaption>
            </figure>

            <figure className="food-shot food-shot--fries">
              {/* oxlint-disable-next-line next/no-img-element -- static campaign image */}
              <img
                src="/images/food-experience-fries.png"
                alt="Hot hand-cut fries under cinematic restaurant lighting"
              />
              <figcaption>02 / The crunch</figcaption>
            </figure>

            <div className="food-experience__statement" aria-hidden="true">
              <span>Fresh</span>
              <span>hits</span>
              <span>different.</span>
            </div>

            <figure className="food-shot food-shot--drinks">
              {/* oxlint-disable-next-line next/no-img-element -- static campaign image */}
              <img
                src="/images/food-experience-drinks.png"
                alt="Two vivid fresh juices covered in cold condensation"
              />
              <figcaption>03 / The pour</figcaption>
            </figure>

            <figure className="food-shot food-shot--kitchen">
              {/* oxlint-disable-next-line next/no-img-element -- static campaign image */}
              <img
                src="/images/food-experience-kitchen.png"
                alt="Leo's open kitchen alive during service"
              />
              <figcaption>04 / The heat</figcaption>
            </figure>

            <figure className="food-shot food-shot--restaurant">
              {/* oxlint-disable-next-line next/no-img-element -- static campaign image */}
              <img
                src="/images/food-experience-restaurant.png"
                alt="A warm contemporary neighborhood restaurant at night"
              />
              <figcaption>05 / After dark</figcaption>
            </figure>
          </div>
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
