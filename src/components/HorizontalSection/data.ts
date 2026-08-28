import type { CardSection } from "./types";

// 초기 데이터가 있고 섹션, 카드가 추가가 가능
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
          src: 'https://picsum.photos/seed/section1-card1/800/500',
          alt: '',
        }
      },
      {
        id: '2',
        title: 'section1-card2',
        category: 'section1-card2-category',
        href: '#',
        image: {
          src: 'https://picsum.photos/seed/section1-card2/800/500',
          alt: '',
        }
      },
      {
        id: '3',
        title: 'section1-card3',
        category: 'section1-card3-category',
        href: '#',
        image: {
          src: 'https://picsum.photos/seed/section1-card3/800/500',
          alt: '',
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
          src: 'https://picsum.photos/seed/section2-card1/800/500',
          alt: '',
        }
      },
      {
        id: '5',
        title: 'section2-card2',
        category: 'section2-card2-category',
        href: '#',
        image: {
          src: 'https://picsum.photos/seed/section2-card2/800/500',
          alt: '',
        }
      },
      {
        id: '6',
        title: 'section2-card3',
        category: 'section2-card3-category',
        href: '#',
        image: {
          src: 'https://picsum.photos/seed/section2-card3/800/500',
          alt: '',
        }
      },
    ]
  },
];
