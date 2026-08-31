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
          src: 'https://placehold.co/800x500/e9e9e9/555555?text=Section1+Card1',
          alt: 'Section1 Card1',
        }
      },
      {
        id: '2',
        title: 'section1-card2',
        category: 'section1-card2-category',
        href: '#',
        image: {
          src: 'https://placehold.co/800x500/e3e3e3/555555?text=Section1+Card2',
          alt: 'Section1 Card2',
        }
      },
      {
        id: '3',
        title: 'section1-card3',
        category: 'section1-card3-category',
        href: '#',
        image: {
          src: 'https://placehold.co/800x500/dcdcdc/555555?text=Section1+Card3',
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
          src: 'https://placehold.co/800x500/e9e9e9/555555?text=Section2+Card1',
          alt: 'Section2 Card1',
        }
      },
      {
        id: '5',
        title: 'section2-card2',
        category: 'section2-card2-category',
        href: '#',
        image: {
          src: 'https://placehold.co/800x500/e3e3e3/555555?text=Section2+Card2',
          alt: 'Section2 Card2',
        }
      },
      {
        id: '6',
        title: 'section2-card3',
        category: 'section2-card3-category',
        href: '#',
        image: {
          src: 'https://placehold.co/800x500/dcdcdc/555555?text=Section2+Card3',
          alt: 'Section2 Card3',
        }
      },
    ]
  },
];
