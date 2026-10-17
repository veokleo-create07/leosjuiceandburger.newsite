import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

import { AboutLeos } from '@/components/site/about-leos';
import { SiteButtonLink } from '@/components/site/button-link';
import { Container } from '@/components/site/container';
import { DigitalMenu } from '@/components/site/digital-menu';
import { FoodGallery } from '@/components/site/food-gallery';
import { Gutschein } from '@/components/site/gutschein';
import { ReviewsCarousel } from '@/components/site/reviews-carousel';
import { RestaurantInfo } from '@/components/site/restaurant-info';
import { SiteFooter } from '@/components/site/site-footer';

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

      </main>
      <SiteFooter />
    </div>
  );
}
