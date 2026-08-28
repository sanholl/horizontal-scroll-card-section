export interface CardItem {
  id: string;
  title: string;
  category: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
};

export interface CardSection {
  id: string;
  title: string;
  subtitle: string;
  moreHref: string;
  cards: CardItem[];
};
