import {
  ArrowDownRight,
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
  Smartphone,
  Ticket,
} from 'lucide-react';

import { SiteButtonLink } from '@/components/site/button-link';
import { Container } from '@/components/site/container';

const reviews = [
  {
    quote:
      'Die Kombination der Zutaten war perfekt abgestimmt und jede einzelne davon schmeckte sehr frisch.',
    author: 'Jan',
    source: 'Lieferando',
    href: 'https://www.leos-juice-burger-lubeck.de/review',
    className: 'review-quote--lead',
  },
  {
    quote: 'Bester Burgerladen Lübecks.',
    author: 'Louis T.',
    source: 'Uber Eats',
    href: 'https://www.ubereats.com/de/store/leos-juice-%26-burger-muhlenstrasse-49/FwyP9WIVVe2ISOoT6zkdYA',
    className: 'review-quote--short',
  },
  {
    quote:
      'Top Qualität & super Service. Jedes Mal ein Muss, wenn ich in Lübeck bin.',
    author: 'Lars S.',
    source: 'Tripadvisor',
    href: 'https://www.tripadvisor.de/Restaurant_Review-g187413-d8482489-Reviews-Leo_s_Juice_Burger-Lubeck_Schleswig_Holstein.html',
    className: 'review-quote--service',
  },
  {
    quote: 'Mein Magen ist nun nicht mehr leer und mein Herz ist voll!',
    author: 'Ivana M.',
    source: 'Google',
    href: 'https://www.google.com/maps/search/?api=1&query=Leo%27s%20Juice%20%26%20Burger%20L%C3%BCbeck',
    className: 'review-quote--heart',
  },
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
                src="/images/leos-hero-burger.jpg"
                srcSet="/images/leos-hero-burger-800.jpg 800w, /images/leos-hero-burger.jpg 1672w"
                sizes="(max-width: 48rem) 100vw, 58vw"
                alt=""
                width="1672"
                height="941"
                loading="eager"
                fetchPriority="high"
                decoding="async"
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
                src="/images/leos-hero-burger.jpg"
                srcSet="/images/leos-hero-burger-800.jpg 800w, /images/leos-hero-burger.jpg 1672w"
                sizes="(max-width: 48rem) 100vw, 75vw"
                alt="A towering double smash burger with melted cheese and crisp lettuce"
                width="1672"
                height="941"
                loading="lazy"
                decoding="async"
              />
              <figcaption>01 / The smash</figcaption>
            </figure>

            <figure className="food-shot food-shot--fries">
              {/* oxlint-disable-next-line next/no-img-element -- static campaign image */}
              <img
                src="/images/food-experience-fries.jpg"
                srcSet="/images/food-experience-fries-640.jpg 640w, /images/food-experience-fries.jpg 1024w"
                sizes="(max-width: 48rem) 94vw, 34vw"
                alt="Hot hand-cut fries under cinematic restaurant lighting"
                width="1024"
                height="1536"
                loading="lazy"
                decoding="async"
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
                src="/images/food-experience-drinks.jpg"
                srcSet="/images/food-experience-drinks-640.jpg 640w, /images/food-experience-drinks.jpg 1145w"
                sizes="(max-width: 48rem) 94vw, 42vw"
                alt="Two vivid fresh juices covered in cold condensation"
                width="1145"
                height="1374"
                loading="lazy"
                decoding="async"
              />
              <figcaption>03 / The pour</figcaption>
            </figure>

            <figure className="food-shot food-shot--kitchen">
              {/* oxlint-disable-next-line next/no-img-element -- static campaign image */}
              <img
                src="/images/food-experience-kitchen.jpg"
                srcSet="/images/food-experience-kitchen-800.jpg 800w, /images/food-experience-kitchen.jpg 1672w"
                sizes="100vw"
                alt="Leo's open kitchen alive during service"
                width="1672"
                height="941"
                loading="lazy"
                decoding="async"
              />
              <figcaption>04 / The heat</figcaption>
            </figure>

            <figure className="food-shot food-shot--restaurant">
              {/* oxlint-disable-next-line next/no-img-element -- static campaign image */}
              <img
                src="/images/food-experience-restaurant.jpg"
                srcSet="/images/food-experience-restaurant-640.jpg 640w, /images/food-experience-restaurant.jpg 1024w"
                sizes="(max-width: 48rem) 94vw, 67vw"
                alt="A warm contemporary neighborhood restaurant at night"
                width="1024"
                height="1536"
                loading="lazy"
                decoding="async"
              />
              <figcaption>05 / After dark</figcaption>
            </figure>
          </div>
        </section>

        <section
          id="restaurant-info"
          className="restaurant-info"
          aria-labelledby="restaurant-info-title"
        >
          <Container className="restaurant-info__heading">
            <p className="eyebrow">03 / Come by</p>
            <h2 id="restaurant-info-title" className="restaurant-info__title">
              Find us where
              <span>Lübeck gets hungry.</span>
            </h2>
          </Container>

          <Container className="restaurant-info__layout">
            <div className="restaurant-info__details">
              <div className="restaurant-detail">
                <MapPin aria-hidden="true" />
                <div>
                  <p className="restaurant-detail__label">Address</p>
                  <address>
                    Mühlenstraße 49
                    <br />
                    23552 Lübeck
                  </address>
                </div>
              </div>

              <div className="restaurant-detail">
                <Clock3 aria-hidden="true" />
                <div>
                  <p className="restaurant-detail__label">Opening hours</p>
                  <dl className="restaurant-hours">
                    <div>
                      <dt>Monday</dt>
                      <dd>17:00 — 22:00</dd>
                    </div>
                    <div>
                      <dt>Tuesday — Sunday</dt>
                      <dd>12:00 — 22:00</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="restaurant-detail">
                <Phone aria-hidden="true" />
                <div>
                  <p className="restaurant-detail__label">Phone</p>
                  <a
                    className="restaurant-detail__phone"
                    href="tel:+4945139774590"
                  >
                    0451 39774590
                  </a>
                </div>
              </div>

              <SiteButtonLink
                className="restaurant-info__cta"
                href="https://www.google.com/maps/search/?api=1&query=M%C3%BChlenstra%C3%9Fe%2049%2C%2023552%20L%C3%BCbeck"
                target="_blank"
                rel="noreferrer"
                size="large"
              >
                Get Directions
                <ArrowUpRight aria-hidden="true" />
              </SiteButtonLink>
            </div>

            <div className="restaurant-map">
              <iframe
                title="Map showing Leo's Juice & Burger at Mühlenstraße 49 in Lübeck"
                src="https://www.google.com/maps?q=M%C3%BChlenstra%C3%9Fe%2049%2C%2023552%20L%C3%BCbeck&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="restaurant-map__caption" aria-hidden="true">
                <span>53.86° N / 10.69° E</span>
                <strong>Altstadt, Lübeck</strong>
              </div>
              <p className="restaurant-map__index" aria-hidden="true">
                03
              </p>
            </div>
          </Container>
        </section>

        <section
          id="reviews"
          className="reviews"
          aria-labelledby="reviews-title"
        >
          <Container className="reviews__heading">
            <p className="eyebrow">04 / Word on the street</p>
            <div className="reviews__heading-copy">
              <h2 id="reviews-title" className="reviews__title">
                They said it.
                <span>Not us.</span>
              </h2>
              <div
                className="reviews__rating"
                aria-label="Rated 4.7 out of 5 on Google"
              >
                <strong>4.7</strong>
                <span>Google rating</span>
              </div>
            </div>
          </Container>

          <Container>
            <div className="reviews__wall">
              {reviews.map((review, index) => (
                <blockquote
                  className={`review-quote ${review.className}`}
                  key={review.author}
                >
                  <span className="review-quote__mark" aria-hidden="true">
                    “
                  </span>
                  <p lang="de">{review.quote}</p>
                  <footer>
                    <span>
                      {String(index + 1).padStart(2, '0')} / {review.author}
                    </span>
                    <a href={review.href} target="_blank" rel="noreferrer">
                      5/5 · {review.source}
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </footer>
                </blockquote>
              ))}
            </div>
          </Container>
        </section>

        <section
          id="gutschein"
          className="gutschein"
          aria-labelledby="gutschein-title"
        >
          <div className="gutschein__ticker" aria-hidden="true">
            <span>Good taste, wrapped up. — Good taste, wrapped up. —</span>
          </div>

          <Container className="gutschein__layout">
            <div className="gutschein__copy">
              <p className="eyebrow">05 / The good gift</p>
              <h2 id="gutschein-title" className="gutschein__title">
                <span>Give Leo&apos;s.</span>
                <span>Not socks.</span>
              </h2>
              <p className="gutschein__text">
                Pick the value. Send it instantly. Let them choose the burger.
              </p>
              <SiteButtonLink
                className="gutschein__cta"
                href="https://www.bon-bon.de/gutschein/leos-juice-burger-luebeck/"
                target="_blank"
                rel="noreferrer"
                size="large"
              >
                Buy Gutschein
                <ArrowUpRight aria-hidden="true" />
              </SiteButtonLink>
            </div>

            <div
              className="voucher-stage"
              aria-label="Leo's gift voucher preview"
            >
              <div className="voucher-stage__sheet voucher-stage__sheet--orange" />
              <div className="voucher-stage__sheet voucher-stage__sheet--cream" />
              <div className="voucher-card">
                <div className="voucher-card__topline">
                  {/* oxlint-disable-next-line next/no-img-element -- local brand asset renders without vinext image runtime overhead */}
                  <img
                    src="/images/leos-logo.png"
                    alt="Leo's Juice & Burger"
                    width="300"
                    height="290"
                  />
                  <span>No. 05</span>
                </div>
                <div className="voucher-card__main">
                  <p>Gift</p>
                  <p>Voucher</p>
                  <span>For seriously good taste.</span>
                </div>
                <div className="voucher-card__footer">
                  <span>Choose your value</span>
                  <strong>€ —</strong>
                </div>
              </div>
              <p className="voucher-stage__note">
                Digital or printed / valid 3 years
              </p>
            </div>
          </Container>
        </section>

        <section
          id="final-cta"
          className="final-cta"
          aria-labelledby="final-cta-title"
        >
          <div className="final-cta__media" aria-hidden="true">
            {/* oxlint-disable-next-line next/no-img-element -- static campaign image */}
            <img
              src="/images/leos-hero-burger.jpg"
              srcSet="/images/leos-hero-burger-800.jpg 800w, /images/leos-hero-burger.jpg 1672w"
              sizes="(max-width: 48rem) 100vw, 39vw"
              alt=""
              width="1672"
              height="941"
              loading="lazy"
              decoding="async"
            />
          </div>

          <Container className="final-cta__inner">
            <div className="final-cta__topline">
              <p className="eyebrow eyebrow--light">06 / Your move</p>
              <p>Lübeck / Mühlenstraße 49</p>
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
                Book a Table
                <ArrowUpRight aria-hidden="true" />
              </SiteButtonLink>
              <SiteButtonLink
                href="https://www.restablo.de/restaurant/leos-juice-burger-luebeck.html"
                target="_blank"
                rel="noreferrer"
                size="large"
                variant="outline"
              >
                Order Now
                <ArrowUpRight aria-hidden="true" />
              </SiteButtonLink>
              <SiteButtonLink
                href="https://www.google.com/maps/search/?api=1&query=M%C3%BChlenstra%C3%9Fe%2049%2C%2023552%20L%C3%BCbeck"
                target="_blank"
                rel="noreferrer"
                size="large"
                variant="text"
              >
                Get Directions
                <ArrowUpRight aria-hidden="true" />
              </SiteButtonLink>
            </div>
          </Container>
        </section>
      </main>

      <footer id="footer" className="site-footer">
        <Container>
          <div className="site-footer__main">
            <a
              className="site-footer__brand"
              href="#hero"
              aria-label="Back to top"
            >
              {/* oxlint-disable-next-line next/no-img-element -- local brand asset renders without vinext image runtime overhead */}
              <img
                src="/images/leos-logo.png"
                alt="Leo's Juice & Burger"
                width="300"
                height="290"
              />
            </a>

            <div className="site-footer__contact">
              <p className="site-footer__label">Find us</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=M%C3%BChlenstra%C3%9Fe%2049%2C%2023552%20L%C3%BCbeck"
                target="_blank"
                rel="noreferrer"
              >
                Mühlenstraße 49
                <br />
                23552 Lübeck
              </a>
            </div>

            <div className="site-footer__contact">
              <p className="site-footer__label">Talk to us</p>
              <a href="tel:+4945139774590">0451 39774590</a>
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
                Book a Table
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a
                href="https://www.restablo.de/restaurant/leos-juice-burger-luebeck.html"
                target="_blank"
                rel="noreferrer"
              >
                Order in App
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
