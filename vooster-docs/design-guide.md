# LandingHero 디자인 가이드

## 1. 전체적인 무드

LandingHero는 혁신적이고 미래지향적인 AI 기반 웹 서비스로, 스타트업 마케터, 1인 창업자, 디지털 에이전시가 랜딩페이지 히어로 섹션을 빠르게 생성할 수 있도록 돕는 서비스입니다. 전체적인 디자인 무드는 **"Innovative and Futuristic"**으로, AI의 첨단 기술력과 신속한 생성 능력을 시각적으로 강조합니다.

핵심 디자인 철학은 역동적인 애니메이션, 모던한 인터랙션, 그리고 넓은 화이트스페이스를 통해 사용자에게 전문적이면서도 접근하기 쉬운 경험을 제공하는 것입니다. 특히 "몇 분 안에" 결과물을 얻을 수 있다는 서비스의 핵심 가치를 직관적으로 전달하는 것에 중점을 둡니다.

## 2. 참조 서비스

- **Name**: Spline
- **Description**: 3D 디자인 및 웹 인터랙션 플랫폼으로 창의적인 3D 경험을 제공하는 서비스
- **Design Mood**: 미래지향적이고 역동적인 그라디언트 배경과 부드러운 3D 인터랙션이 특징
- **Primary Color**: #2979FF (Electric Blue)
- **Secondary Color**: #7B5CFF (Ultraviolet Purple)

## 3. 색상 & 그라데이션

서비스의 색상 팔레트는 Cool 톤 기반의 Mid-High Saturation으로 구성되며, 그라디언트를 중심으로 한 색상 체계를 사용합니다.

- **Primary Color**: #2979FF (Electric Blue)
- **Secondary Color**: #7B5CFF (Ultraviolet Purple)
- **Primary Gradient**: Electric Blue (#2979FF) → Ultraviolet Purple (#7B5CFF)
- **Accent Color**: #2EFED9 (Neon Mint)
- **Surface Colors**: 
  - Charcoal Black: #0E0E12
  - Pure White: #FFFFFF
- **Status Colors**:
  - Success: #12B76A
  - Error: #F04438
  - Warning: #F79009
- **Mood**: Cool, Mid-High Saturation
- **색상 사용법**: Primary Gradient는 주요 CTA 버튼과 히어로 섹션에 사용하며, Accent Color인 Neon Mint는 아이콘과 강조 요소에 활용합니다. Surface Colors는 배경과 카드 컴포넌트에 적용하여 깊이감을 표현합니다.

## 4. 타이포그래피 & 폰트

명확하고 모던한 가독성을 위해 Inter 폰트 패밀리를 기반으로 한 타이포그래피 시스템을 구축합니다.

- **Heading 1**: Inter Tight, 64-80px (fluid), 700-800 Weight, -2% letter-spacing
- **Heading 2**: Inter Tight, 48-56px (fluid), 700 Weight, -1% letter-spacing
- **Heading 3**: Inter Tight, 32-40px (fluid), 600 Weight, -0.5% letter-spacing
- **Body Large**: Inter, 18px, 500 Weight, 0% letter-spacing
- **Body**: Inter, 16px, 400 Weight, 0% letter-spacing
- **Small**: Inter, 14px, 400 Weight, 0% letter-spacing
- **Caption**: Inter, 12px, 500 Weight, 0% letter-spacing

## 5. 레이아웃 & 구조

반응형 그리드 시스템을 기반으로 한 레이아웃 구조를 정의합니다.

- **Desktop (1440px+)**: 12-column grid, 32px gutter
- **Tablet (1024-1439px)**: 12-column grid, 24px gutter  
- **Mobile Large (640-1023px)**: 8-column grid, 16px gutter
- **Mobile Small (<640px)**: 4-column grid, 12px gutter

전체 레이아웃은 중앙 정렬을 기본으로 하며, 최대 너비 1440px로 제한합니다. 섹션 간 간격은 120px(Desktop), 80px(Tablet), 60px(Mobile)를 적용합니다.

## 6. 비주얼 스타일

AI 기반 서비스의 혁신적 특성을 반영한 비주얼 스타일을 적용합니다.

- **아이콘**: lucide-react 라이브러리 사용, 1.5px stroke, fill 없음, Neon Mint 또는 70% White 색상
- **일러스트레이션**: Lottie 애니메이션 또는 CSS/GSAP 키프레임 애니메이션 활용
- **3D 요소**: Spline export PNG/WebP 형식으로 사용
- **이미지**: 고해상도(2x) WebP 포맷, 45도 Gradient overlay (70% opacity) 적용
- **애니메이션**: 모든 모션은 0.6s ease-out, 최대 1.2s 지속시간, 반복 없음

## 7. UX 가이드

초보자도 쉽게 사용할 수 있는 직관적인 UX 전략을 적용합니다.

- **온보딩**: 3단계 슬라이드 (입력 → 미리보기 → 코드 추출)
- **CTA 문구**: "다음 단계로!", "코드 복사하기" 등 친근하고 명확한 표현 사용
- **도움말 시스템**: 폼 필드 옆 '?' 아이콘 클릭 시 예제 프롬프트 노출
- **피드백**: AI 진행 상태를 Skeleton UI와 진행률(%) 표시로 명확하게 안내
- **에러 처리**: 친근한 톤의 에러 메시지와 해결 방법 제시
- **접근성**: WCAG AA 기준 준수, 2px Neon Mint 포커스 링 적용

## 8. UI 컴포넌트 가이드

### 버튼
- **Primary Button**: Rounded-md(8px), Primary Gradient fill, Hover 시 scale-up + glow 효과
- **Secondary Button**: Transparent background, Primary color border, Hover 시 배경색 변경
- **Text Button**: 밑줄 없음, Hover 시 Accent color 변경

### 입력 필드
- **기본 상태**: #2A2A32 테두리, #FFFFFF 배경
- **포커스 상태**: #7B5CFF 그림자 0 0 0 2px 적용
- **에러 상태**: #F04438 테두리 및 에러 메시지

### 카드
- **배경**: Dark glassmorphism (RGBA #0E0E12, 60%)
- **테두리**: 1px inner border (#FFFFFF 10%)
- **그림자**: 0 4px 24px rgba(0, 0, 0, 0.1)
- **모서리**: 12px border-radius

### 태그
- **스타일**: Neon Mint 텍스트, Dark 배경
- **크기**: 12px 폰트, rounded-full
- **패딩**: 6px 12px

### 네비게이션
- **구조**: Logo(좌) — 링크(중앙) — CTA 버튼(우)
- **높이**: 64px 고정
- **스크롤 상태**: 투명에서 Charcoal Black 80% 블러로 변경

### 로딩 상태
- **Skeleton UI**: 실제 콘텐츠 구조를 반영한 플레이스홀더
- **진행률 표시**: 퍼센트 숫자와 프로그레스 바 조합
- **애니메이션**: 부드러운 pulse 효과 적용