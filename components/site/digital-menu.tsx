'use client';

import { ArrowUpRight } from 'lucide-react';
import { useMemo, useState } from 'react';

import { menuCategories, orderUrl, type MenuLocale } from '@/data/menu';

const copy = {
  de: {
    title: 'Entdecke unsere Speisekarte',
    eyebrow: 'Die Leo’s Auswahl',
    intro: 'Unsere Klassiker.',
    servingSuggestion: 'Serviervorschlag',
    order: 'Jetzt bestellen',
    note: 'Preise können im Restaurant oder auf der Bestellplattform abweichen.',
    languageLabel: 'Sprache wählen',
    categoriesLabel: 'Menükategorien',
  },
  en: {
    title: 'Discover our menu',
    eyebrow: 'The Leo’s selection',
    intro: 'Our favourites.',
    servingSuggestion: 'Serving suggestion',
    order: 'Order now',
    note: 'Prices may differ in the restaurant or on the ordering platform.',
    languageLabel: 'Choose language',
    categoriesLabel: 'Menu categories',
  },
} as const;

export function DigitalMenu() {
  const [locale, setLocale] = useState<MenuLocale>('de');
  const [categoryId, setCategoryId] = useState(menuCategories[0].id);
  const [selectedItemId, setSelectedItemId] = useState(menuCategories[0].items[0].id);

  const category = useMemo(
    () => menuCategories.find((entry) => entry.id === categoryId) ?? menuCategories[0],
    [categoryId],
  );
  const selectedItem =
    category.items.find((entry) => entry.id === selectedItemId) ?? category.items[0];

  function selectCategory(id: (typeof menuCategories)[number]['id']) {
    const nextCategory = menuCategories.find((entry) => entry.id === id);

    if (!nextCategory) return;

    setCategoryId(id);
    setSelectedItemId(nextCategory.items[0].id);
  }

  return (
    <div className="digital-menu">
      <header className="digital-menu__header">
        <div>
          <p className="digital-menu__eyebrow">{copy[locale].eyebrow}</p>
          <h2 id="menu-title">{copy[locale].title}</h2>
        </div>
        <div className="digital-menu__language" aria-label={copy[locale].languageLabel}>
          {(['de', 'en'] as MenuLocale[]).map((language) => (
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
        <p className="digital-menu__intro">{copy[locale].intro}</p>
      </header>

      <div
        className="digital-menu__tabs"
        role="tablist"
        aria-label={copy[locale].categoriesLabel}
      >
        {menuCategories.map((entry) => (
          <button
            type="button"
            role="tab"
            key={entry.id}
            id={`menu-tab-${entry.id}`}
            aria-controls={`menu-panel-${entry.id}`}
            aria-selected={category.id === entry.id}
            onClick={() => selectCategory(entry.id)}
          >
            {entry.label[locale]}
          </button>
        ))}
      </div>

      <div
        className="digital-menu__panel"
        role="tabpanel"
        id={`menu-panel-${category.id}`}
        aria-labelledby={`menu-tab-${category.id}`}
        key={`${category.id}-${locale}`}
      >
        <figure className="digital-menu__visual" key={selectedItem.id}>
          {/* oxlint-disable-next-line next/no-img-element -- local editorial photography avoids vinext image runtime overhead */}
          <img
            src={selectedItem.image}
            alt={selectedItem.imageAlt[locale]}
            width="1672"
            height="941"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span>{selectedItem.name[locale]}</span>
            {selectedItem.imageIsServingSuggestion ? (
              <small>{copy[locale].servingSuggestion}</small>
            ) : null}
          </figcaption>
        </figure>

        <div className="digital-menu__items">
          {category.items.map((item) => {
            const isSelected = item.id === selectedItem.id;

            return (
              <button
                className="digital-menu__item"
                type="button"
                key={item.id}
                aria-pressed={isSelected}
                onClick={() => setSelectedItemId(item.id)}
                onFocus={() => setSelectedItemId(item.id)}
                onMouseEnter={() => setSelectedItemId(item.id)}
              >
                <span className="digital-menu__item-heading">
                  <strong>{item.name[locale]}</strong>
                  <span>{item.price}</span>
                </span>
                <span className="digital-menu__item-description">
                  {item.description[locale]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <footer className="digital-menu__footer">
        <p>{copy[locale].note}</p>
        <a href={orderUrl} target="_blank" rel="noreferrer">
          {copy[locale].order}
          <ArrowUpRight aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
}
