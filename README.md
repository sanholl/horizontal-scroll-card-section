# Horizontal Scroll Card Section

## 프로젝트 소개

세로 스크롤 진행도를 카드 트랙의 가로 이동으로 변환하는 React 기반 카드 섹션입니다.

PC에서는 섹션이 화면 중앙에 고정된 상태로 카드가 가로로 이동하며, 가로 이동이 끝나면 다시 일반적인 세로 페이지 흐름으로 이어집니다. Tablet/Mobile에서는 스크롤 변환을 사용하지 않고 네이티브 가로 스와이프를 제공합니다.

- [배포 페이지](https://horizontal-scroll-card-section.vercel.app)
- [GitHub 저장소](https://github.com/sanholl/horizontal-scroll-card-section)

## 기술 스택

- React
- TypeScript
- Vite
- CSS
- ESLint

별도의 스크롤 라이브러리는 사용하지 않았습니다. 이번 구현은 단일 가로 트랙의 위치 계산이 핵심이므로 CSS `position: sticky`와 브라우저의 `scrollLeft`를 직접 사용하는 방식이 요구사항을 설명하고 제어하기에 적합하다고 판단했습니다.

## 실행 방법

```bash
npm install
npm run dev
```

빌드와 정적 검사는 다음 명령어로 실행할 수 있습니다.

```bash
npm run lint
npm run build
npm run preview
```

## 프로젝트 구조

```text
src/
├── components/
│   └── HorizontalSection/
│       ├── HorizontalSection.tsx  # 스크롤 계산 및 섹션 렌더링
│       ├── data.ts                # 섹션·카드 더미 데이터
│       └── types.ts               # 섹션·카드 타입 정의
├── App.tsx                        # 전체 페이지 흐름 구성
├── index.css                      # 전역·반응형·스크롤 스타일
└── main.tsx                       # React 진입점
```

## 구현 내용

### PC: 세로 스크롤을 가로 이동으로 변환

마우스 휠 이벤트를 직접 가로채거나 `preventDefault()`를 호출하지 않고, 페이지의 실제 세로 스크롤 위치를 가로 트랙의 `scrollLeft` 값으로 변환했습니다.

가로 이동 거리는 다음과 같이 계산합니다.

```ts
const horizontalDistance =
  scrollContainer.scrollWidth - scrollContainer.clientWidth;
```

가로 이동에 필요한 거리만큼 외부 wrapper의 높이를 확보하고, 섹션이 화면 중앙에 도달하면 내부 영역이 `position: sticky`로 고정됩니다. 가로 이동이 끝나면 sticky 고정이 해제되고 다음 더미 섹션으로 자연스럽게 이어집니다.

### 섹션 제목 고정

모든 섹션은 하나의 가로 트랙 안에 배치했습니다.

각 섹션의 제목은 해당 섹션 범위 안에서 `position: sticky`로 동작합니다. 카드가 이동하는 동안 제목은 좌측 padding 라인에 고정되고, 현재 섹션이 끝나면 다음 섹션 제목으로 전환됩니다.

### 레이아웃 정렬

콘텐츠 기준 너비는 최대 `1400px`로 제한하고, 다음 여백을 별도로 유지했습니다.

- PC: `20px`
- Tablet/Mobile: `10px`

트랙에는 `width: max-content`를 적용해 마지막 카드 뒤쪽 여백까지 실제 스크롤 영역에 포함되도록 구성했습니다.

### 스크롤 성능

스크롤 이벤트마다 DOM 계산이 반복되지 않도록 `requestAnimationFrame`과 실행 여부 플래그를 사용해 한 프레임당 한 번만 위치를 반영합니다.

```ts
if (ticking) return;

ticking = true;

requestAnimationFrame(() => {
  updateScrollLeft();
  ticking = false;
});
```

스크롤 이벤트는 `{ passive: true }`로 등록했습니다.

### Resize 대응

브라우저 크기가 변경되면 다음 값을 다시 계산합니다.

- 가로 이동 거리
- sticky 영역 높이
- 화면 중앙 고정 위치
- 외부 wrapper 높이

이를 통해 브라우저 resize와 화면 회전 이후에도 기존 스크롤 거리와 고정 위치가 유지되도록 했습니다.

## 반응형 대응

`1024px` 이하에서는 PC의 세로 스크롤 변환 방식을 비활성화하고 네이티브 가로 스크롤을 사용합니다.

```css
.track-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```

모바일에서 세로 스크롤을 강제로 가로 이동으로 변환하면 사용자가 페이지를 탐색하는 흐름을 방해할 수 있다고 판단했습니다.

따라서 모바일에서는 다음과 같이 동작합니다.

- 상하 제스처: 일반 페이지 세로 스크롤
- 좌우 제스처: 카드 트랙 가로 스크롤
- 카드 너비: `280px`, 섹션 간격: `40px` (정해진 수치는 아니고, 화면에 카드가 적당히 걸쳐 보이도록 잡은 값입니다.)

스크롤바는 화면에서 숨기되 네이티브 스크롤 기능은 유지했습니다.

## 섹션 · 카드 추가하는 법
섹션과 카드는 `data.ts`의 배열을 기반으로 렌더링됩니다.

### 섹션 추가

`initData` 배열에 다음 형식의 객체를 추가합니다.

```ts
{
  id: "section-3",
  title: "섹션 제목",
  subtitle: "섹션 설명",
  moreHref: "#",
  cards: [],
}
```

### 카드 추가

추가하려는 섹션의 `cards` 배열에 다음 형식의 객체를 추가합니다.

```ts
{
  id: "card-4",
  title: "카드 제목",
  category: "카테고리",
  href: "#",
  image: {
    src: "https://example.com/image.jpg",
    alt: "이미지 설명",
  },
}
```

## 구현 과정에서 고려한 점

- 휠 이벤트를 직접 막지 않고 브라우저의 세로 스크롤 흐름을 유지
- 마지막 카드 뒤에도 반응형 여백 유지
- 섹션과 카드 개수에 의존하지 않는 이동 거리 계산
- 화면 너비에 따라 PC 인터랙션과 모바일 네이티브 스크롤을 분리해서 적용

## 아쉬운 점 / 시간이 더 있었다면

- 태블릿/모바일 브레이크포인트 세분화
- 진행률 계산 로직 순수 함수 분리
- 스크롤 계산 로직 훅으로 분리해 재사용 가능하도록 보강