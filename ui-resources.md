# UI Resources Guidelines

## 1. 목적
이 문서는 티맵모빌리티 지원용 포트폴리오 웹페이지에 참고할 UI 오픈 리소스를 정리한다.  
목표는 예쁜 효과를 많이 넣는 것이 아니라, 채용자가 핵심 내용을 더 빠르게 이해하게 만드는 것이다.

## 2. 적용 우선순위
1. shadcn/ui
2. Shadcn Space 또는 Shadcn UI Blocks
3. Motion Primitives
4. Animate UI
5. Aceternity UI / Magic UI / React Bits는 제한적으로 참고

## 3. 리소스별 사용 기준

| 리소스 | 사용할 곳 | 사용 기준 |
|---|---|---|
| shadcn/ui | Card, Badge, Button, Table, Separator | 기본 컴포넌트 구조에 사용 |
| Shadcn Space | Hero, Portfolio Section, Card Grid | 섹션 레이아웃 참고 |
| Shadcn UI Blocks | Portfolio, Landing, Dashboard blocks | 빠른 레이아웃 참고 |
| Cult UI | 미니멀 컴포넌트, 섹션 분위기 | 과하지 않은 경우만 참고 |
| Aceternity UI | 배경, hover, spotlight 효과 | 강한 효과는 피하고 아주 제한적으로 사용 |
| Magic UI | subtle animated components | 텍스트/배경 효과는 최소 사용 |
| React Bits | 인터랙티브 카드, 텍스트 모션 | 과한 3D/글리치/파티클은 사용하지 않음 |

## 4. 현재 포트폴리오에 추천하는 적용 범위
- Hero: shadcn/ui + 간결한 타이포그래피
- Recruiter Summary: 표보다 카드형 리스트 우선
- Selected Projects: 전체 클릭 가능한 카드
- Project Details: 섹션형 케이스 스터디
- Evidence: 이미지 플레이스홀더 + Figma 링크
- Contact: 단순 링크 카드

## 5. 피해야 할 UI
- 과한 그라디언트 배경
- 3D 카드 회전
- 움직이는 텍스트 남발
- 마케팅 랜딩페이지처럼 보이는 효과
- 실무 포트폴리오보다 템플릿 쇼케이스처럼 보이는 구성
- Apple 스타일을 흉내만 내는 유리 효과/블러 과다 사용
- 텍스트보다 UI 효과가 먼저 보이는 구조

## 6. Apple.md와 함께 적용할 때의 기준
- Apple.md는 화면 밀도, 여백, 타이포그래피, 제품 소개형 흐름에 참고한다.
- UI 리소스는 컴포넌트 구조와 구현 편의성을 위해 참고한다.
- Apple 스타일을 그대로 복제하지 않는다.
- 채용 포트폴리오답게 프로젝트 내용과 근거가 중심이 되어야 한다.
- 정보 위계가 흐려지면 효과를 제거한다.

## 7. 최종 체크리스트
- 이 UI가 내용을 더 빨리 이해하게 만드는가?
- 카드가 클릭 가능하다는 점이 자연스럽게 보이는가?
- 모바일에서도 읽기 쉬운가?
- 포트폴리오가 기획서처럼 보이지 않는가?
- 효과보다 프로젝트 내용이 먼저 보이는가?
