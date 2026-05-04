# Design Decision Log

## 보류 중인 결정

### HeroUI 전환 검토 (2026-05-04)
- **시점**: 콘텐츠가 충분히 채워지고 디자인 튜닝 단계에 진입할 때
- **검토 내용**: 현재 shadcn/ui → HeroUI(구 NextUI)로 전환할지 여부
- **참고 링크**: https://heroui.com/docs/react/components
- **고려사항**:
  - shadcn/ui는 이미 설치 완료 (Card, Badge, Button 적용됨)
  - HeroUI는 framer-motion 등 무거운 의존성 포함
  - 이력서에 "shadcn/ui 전환" 프로젝트가 있어 shadcn/ui 유지가 증거로서 유리
  - 전환 시 기존 컴포넌트 전부 교체 필요

## 확정된 결정

### 디자인 시스템 기준: Apple.md (2026-05-04)
- Apple 스페이싱/radius/색상 기준 적용
- pill badge, 8px card radius, #f5f5f7 배경, 부드러운 확산 그림자

### UX Writing 톤: 담백한 서술체 (2026-05-04)
- ux-writing.md 섹션 8 참고
- 자기 평가 제거, 사실 기반 문장, ~습니다 통일

### 주요 역량 요약: 가로선 리스트 유지 (2026-05-04)
- 프로젝트 카드와 시각적 구분을 위해 Card 형태 미사용
