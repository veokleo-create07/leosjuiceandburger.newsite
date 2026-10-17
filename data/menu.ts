export type MenuLocale = 'de' | 'en';

export type LocalizedText = Record<MenuLocale, string>;

export type MenuItem = {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  price: string;
  image: string;
  imageAlt: LocalizedText;
  imageIsServingSuggestion?: boolean;
};

export type MenuCategory = {
  id: 'burger' | 'veggie' | 'beilagen' | 'saefte' | 'getraenke';
  label: LocalizedText;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'burger',
    label: { de: 'Burger', en: 'Burgers' },
    items: [
      {
        id: 'cheeseburger-classic',
        name: { de: 'Cheeseburger Classic', en: 'Classic Cheeseburger' },
        description: {
          de: '150 g Beef, Ketchup, Burgersoße, Cheddar, Salat, Tomate und Zwiebeln.',
          en: '150 g beef, ketchup, burger sauce, cheddar, lettuce, tomato and onions.',
        },
        price: '12,10 €',
        image: '/images/menu/cheeseburger-classic.jpg',
        imageAlt: {
          de: 'Frisch zubereiteter Cheeseburger bei Leo’s',
          en: 'Freshly prepared cheeseburger at Leo’s',
        },
      },
      {
        id: 'chili-cheese-burger',
        name: { de: 'Chili Cheese Burger', en: 'Chili Cheese Burger' },
        description: {
          de: '150 g Beef, Ketchup, Burgersoße, Cheddar, Salat, Tomate, rote Chili, Jalapeños und Zwiebeln.',
          en: '150 g beef, ketchup, burger sauce, cheddar, lettuce, tomato, red chilli, jalapeños and onions.',
        },
        price: '13,40 €',
        image: '/images/food-experience-kitchen.jpg',
        imageAlt: {
          de: 'Burgerzubereitung in Leo’s Küche',
          en: 'Burger preparation in Leo’s kitchen',
        },
        imageIsServingSuggestion: true,
      },
    ],
  },
  {
    id: 'veggie',
    label: { de: 'Veggie', en: 'Veggie' },
    items: [
      {
        id: 'sweet-potato-burger',
        name: { de: 'Sweet Potato Burger', en: 'Sweet Potato Burger' },
        description: {
          de: 'Veganes Süßkartoffel-Kidneybohnen-Patty in Kräuterpanade, Ketchup, Tomatenrelish, Salat und Tomate.',
          en: 'Vegan sweet potato and kidney bean patty in a herb crumb, ketchup, tomato relish, lettuce and tomato.',
        },
        price: '13,90 €',
        image: '/images/menu/sweet-potato-burger.jpg',
        imageAlt: {
          de: 'Servierte Burger bei Leo’s Juice & Burger',
          en: 'Burgers served at Leo’s Juice & Burger',
        },
      },
      {
        id: 'golden-vegan-deluxe',
        name: { de: 'Golden Vegan Deluxe', en: 'Golden Vegan Deluxe' },
        description: {
          de: 'Veganes Patty auf Sojaproteinbasis, Ketchup, Salat, Tomate, gebratene Zwiebeln, Champignons und vegane Burgersoße.',
          en: 'Vegan soy protein patty, ketchup, lettuce, tomato, fried onions, mushrooms and vegan burger sauce.',
        },
        price: '14,90 €',
        image: '/images/food-experience-kitchen.jpg',
        imageAlt: {
          de: 'Frische Zubereitung in Leo’s Küche',
          en: 'Fresh preparation in Leo’s kitchen',
        },
        imageIsServingSuggestion: true,
      },
    ],
  },
  {
    id: 'beilagen',
    label: { de: 'Beilagen', en: 'Sides' },
    items: [
      {
        id: 'avocadofritten',
        name: { de: 'Avocadofritten', en: 'Avocado Fries' },
        description: {
          de: 'Mit Avocado-Dip, Sour Cream, Parmesan und Tomate.',
          en: 'With avocado dip, sour cream, parmesan and tomato.',
        },
        price: '7,90 €',
        image: '/images/menu/avocadofries.jpg',
        imageAlt: {
          de: 'Knusprige Fritten mit Dip',
          en: 'Crispy fries with dip',
        },
      },
      {
        id: 'triple-cheese-fritten',
        name: { de: 'Triple Cheese Fritten', en: 'Triple Cheese Fries' },
        description: {
          de: 'Fritten mit Cheddar, Parmesan, Mozzarella, Tomate und Petersilie.',
          en: 'Fries with cheddar, parmesan, mozzarella, tomato and parsley.',
        },
        price: '9,40 €',
        image: '/images/food-experience-fries.jpg',
        imageAlt: {
          de: 'Goldene Fritten bei Leo’s',
          en: 'Golden fries at Leo’s',
        },
        imageIsServingSuggestion: true,
      },
    ],
  },
  {
    id: 'saefte',
    label: { de: 'Säfte', en: 'Juices' },
    items: [
      {
        id: 'josis-liebling',
        name: { de: 'Josi’s Liebling', en: 'Josi’s Favourite' },
        description: {
          de: 'Mango, Orange, Apfel und Minze, ca. 310 ml.',
          en: 'Mango, orange, apple and mint, approx. 310 ml.',
        },
        price: '5,90 €',
        image: '/images/food-experience-drinks.jpg',
        imageAlt: {
          de: 'Frische Säfte bei Leo’s',
          en: 'Fresh juices at Leo’s',
        },
        imageIsServingSuggestion: true,
      },
      {
        id: 'lotta',
        name: { de: 'Lotta', en: 'Lotta' },
        description: {
          de: 'Himbeere, Apfel, Minze und Zitrone, ca. 310 ml.',
          en: 'Raspberry, apple, mint and lemon, approx. 310 ml.',
        },
        price: '5,90 €',
        image: '/images/food-experience-drinks.jpg',
        imageAlt: {
          de: 'Bunte hausgemachte Getränke bei Leo’s',
          en: 'Colourful house-made drinks at Leo’s',
        },
        imageIsServingSuggestion: true,
      },
    ],
  },
  {
    id: 'getraenke',
    label: { de: 'Getränke', en: 'Drinks' },
    items: [
      {
        id: 'coca-cola',
        name: { de: 'Coca-Cola 0,33 l', en: 'Coca-Cola 0.33 l' },
        description: {
          de: 'Erfrischungsgetränk in der 0,33-l-Flasche.',
          en: 'Soft drink in a 0.33 l bottle.',
        },
        price: '3,40 €',
        image: '/images/food-experience-drinks.jpg',
        imageAlt: {
          de: 'Gekühlte Getränke bei Leo’s',
          en: 'Chilled drinks at Leo’s',
        },
        imageIsServingSuggestion: true,
      },
      {
        id: 'fanta-orange',
        name: { de: 'Fanta Orange 0,33 l', en: 'Fanta Orange 0.33 l' },
        description: {
          de: 'Orangenlimonade in der 0,33-l-Flasche.',
          en: 'Orange soft drink in a 0.33 l bottle.',
        },
        price: '3,40 €',
        image: '/images/food-experience-drinks.jpg',
        imageAlt: {
          de: 'Gekühlte Getränke auf Leo’s Tresen',
          en: 'Chilled drinks on Leo’s counter',
        },
        imageIsServingSuggestion: true,
      },
    ],
  },
];

export const orderUrl =
  'https://www.lieferando.de/speisekarte/leos-juice-burger-lubeck-lubecker-altstadt';
