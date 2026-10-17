import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

import { AboutLeos } from '@/components/site/about-leos';
import { SiteButtonLink } from '@/components/site/button-link';
import { Container } from '@/components/site/container';
import { DigitalMenu } from '@/components/site/digital-menu';
import { FoodGallery } from '@/components/site/food-gallery';
import { Gutschein } from '@/components/site/gutschein';
import { ReviewsCarousel } from '@/components/site/reviews-carousel';
import { RestaurantInfo } from '@/components/site/restaurant-info';

const kuecknitzMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Leo's Juice & Burger Lübeck-Kücknitz")}`;

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
            <a href="#menu">Speisekarte</a>
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
            <div className="hero__copy">
              <h1 id="hero-title" className="hero__title">
                <span>Frisch gemacht.</span>
                <span>Richtig lecker.</span>
              </h1>
              <p className="hero__subtitle">
                Handgemachte Burger und frische Säfte in Lübeck-Kücknitz.
              </p>
              <div className="hero__actions" aria-label="Leo's besuchen oder bestellen">
                <SiteButtonLink
                  className="hero__action hero__action--1"
                  href="https://www.leosjuiceandburger-luebeck.de/"
                  target="_blank"
                  rel="noreferrer"
                  size="large"
                >
                  Tisch reservieren
                  <ArrowUpRight aria-hidden="true" />
                </SiteButtonLink>
                <SiteButtonLink
                  className="hero__action hero__action--2"
                  href="https://www.restablo.de/restaurant/leos-juice-burger-luebeck.html"
                  target="_blank"
                  rel="noreferrer"
                  size="large"
                  variant="outline"
                >
                  Jetzt bestellen
                  <ArrowUpRight aria-hidden="true" />
                </SiteButtonLink>
              </div>
            </div>

            <div className="hero__media">
              {/* oxlint-disable-next-line next/no-img-element -- avoids a vinext next/image runtime conflict */}
              <img
                className="hero__image"
                src="/images/leos-hero-burger.jpg"
                srcSet="/images/leos-hero-burger-800.jpg 800w, /images/leos-hero-burger.jpg 1672w"
                sizes="(max-width: 67.99rem) calc(100vw - 2.5rem), 46vw"
                alt="Frisch zubereiteter Burger bei Leo's Juice & Burger"
                width="1672"
                height="941"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </Container>
        </section>

        <section
          id="about-leos"
          className="about-leos"
          aria-labelledby="about-leos-title"
        >
          <Container>
            <AboutLeos />
          </Container>
        </section>

        <section
          id="food-experience"
          className="food-experience"
          aria-labelledby="food-experience-title"
        >
          <Container className="food-showcase">
            <header className="food-showcase__header">
              <h2 id="food-experience-title" className="food-showcase__title">
                <span>Mit Liebe gemacht.</span>
                <span>Frisch serviert.</span>
              </h2>
              <p>
                Drei Favoriten, eine Haltung: gute Zutaten, echtes Handwerk und
                Geschmack ohne Umwege.
              </p>
            </header>

            <FoodGallery />
          </Container>
        </section>

        <section id="menu" className="menu-section" aria-labelledby="menu-title">
          <Container>
            <DigitalMenu />
          </Container>
        </section>

        <section
          id="restaurant-info"
          className="restaurant-info"
          aria-labelledby="restaurant-info-title"
        >
          <Container>
            <RestaurantInfo />
          </Container>
        </section>

        <section
          id="reviews"
          className="reviews"
          aria-labelledby="reviews-title"
        >
          <Container>
            <ReviewsCarousel />
          </Container>
        </section>

        <section
          id="gutschein"
          className="gutschein"
          aria-labelledby="gutschein-title"
        >
          <Container>
            <Gutschein />
          </Container>
        </section>

        <section
          id="final-cta"
          className="final-cta"
          aria-labelledby="final-cta-title"
        >
          <Container className="final-cta__inner">
            <div className="final-cta__topline">
              <p className="eyebrow eyebrow--light">Your move</p>
              <p>Lübeck-Kücknitz</p>
            </div>

            <h2 id="final-cta-title" className="final-cta__title">
              <span>Hungry</span>
              <span>yet?</span>
            </h2>

            <div
              className="final-cta__actions"
              aria-label="Visit or order from Leo's"
            >
              <SiteButtonLink
                href="https://www.leosjuiceandburger-luebeck.de/"
                target="_blank"
                rel="noreferrer"
                size="large"
              >
                Book a table
                <ArrowUpRight aria-hidden="true" />
              </SiteButtonLink>
              <SiteButtonLink
                href="https://www.restablo.de/restaurant/leos-juice-burger-luebeck.html"
                target="_blank"
                rel="noreferrer"
                size="large"
                variant="outline"
              >
                Order now
                <ArrowUpRight aria-hidden="true" />
              </SiteButtonLink>
              <SiteButtonLink
                href={kuecknitzMapsUrl}
                target="_blank"
                rel="noreferrer"
                size="large"
                variant="text"
              >
                Get directions
                <ArrowUpRight aria-hidden="true" />
              </SiteButtonLink>
            </div>
          </Container>
        </section>
      </main>

      <footer id="footer" className="site-footer">
        <Container>
          <div className="site-footer__main">
            <div className="site-footer__contact">
              <p className="site-footer__label">Find us</p>
              <a
                href={kuecknitzMapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Lübeck-Kücknitz
                <br />
                Adresse wird ergänzt
              </a>
            </div>

            <div className="site-footer__contact">
              <p className="site-footer__label">Talk to us</p>
              <span>Telefonnummer wird ergänzt</span>
              <a
                href="https://www.instagram.com/leosjuiceandburger/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <nav className="site-footer__actions" aria-label="Footer actions">
              <a
                href="https://www.leosjuiceandburger-luebeck.de/"
                target="_blank"
                rel="noreferrer"
              >
                Book a table
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a
                href="https://www.restablo.de/restaurant/leos-juice-burger-luebeck.html"
                target="_blank"
                rel="noreferrer"
              >
                Order in app
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a
                href="https://www.bon-bon.de/gutschein/leos-juice-burger-luebeck/"
                target="_blank"
                rel="noreferrer"
              >
                Gutschein
                <ArrowUpRight aria-hidden="true" />
              </a>
            </nav>
          </div>

          <div className="site-footer__bottom">
            <p>© 2026 Organic Juice Bar GmbH</p>
            <nav className="site-footer__legal" aria-label="Legal">
              <a
                href="https://www.juiceandburger.de/impressum/"
                target="_blank"
                rel="noreferrer"
              >
                Impressum
              </a>
              <a
                href="https://www.juiceandburger.de/datenschutz/"
                target="_blank"
                rel="noreferrer"
              >
                Datenschutz
              </a>
            </nav>
          </div>
        </Container>
      </footer>
    </div>
  );
}
