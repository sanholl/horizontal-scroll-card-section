import type { CardSection } from "./types";

export const initData: CardSection[] = [
  {
    id: '1',
    title: 'Section1',
    subtitle: 'Section1 Subtitle',
    moreHref: '#',
    cards: [
      {
        id: '1',
        title: 'section1-card1',
        category: 'section1-card1-category',
        href: '#',
        image: {
          src: '/img/1.jpg',
          alt: 'Section1 Card1',
        }
      },
      {
        id: '2',
        title: 'section1-card2',
        category: 'section1-card2-category',
        href: '#',
        image: {
          src: '/img/2.jpg',
          alt: 'Section1 Card2',
        }
      },
      {
        id: '3',
        title: 'section1-card3',
        category: 'section1-card3-category',
        href: '#',
        image: {
          src: '/img/3.jpg',
          alt: 'Section1 Card3',
        }
      },
    ]
  },
  {
    id: '2',
    title: 'Section2',
    subtitle: 'Section2 Subtitle',
    moreHref: '#',
    cards: [
      {
        id: '4',
        title: 'section2-card1',
        category: 'section2-card1-category',
        href: '#',
        image: {
          src: '/img/4.jpg',
          alt: 'Section2 Card1',
        }
      },
      {
        id: '5',
        title: 'section2-card2',
        category: 'section2-card2-category',
        href: '#',
        image: {
          src: '/img/5.jpg',
          alt: 'Section2 Card2',
        }
      },
      {
        id: '6',
        title: 'section2-card3',
        category: 'section2-card3-category',
        href: '#',
        image: {
          src: '/img/6.jpg',
          alt: 'Section2 Card3',
        }
      },
    ]
  },
];
