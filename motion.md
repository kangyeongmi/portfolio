# Motion Guidelines

## 1. 목적
이 문서는 티맵모빌리티 지원용 포트폴리오 웹페이지의 모션 사용 기준을 정리한다.  
모션의 목적은 화면을 화려하게 만드는 것이 아니라, 채용자가 정보 흐름을 더 쉽게 이해하게 만드는 것이다.

## 2. 적용 우선순위
1. Project Card hover / active / focus
2. Smooth anchor scroll
3. Section entry fade
4. Evidence 영역 hover
5. Contact link hover

## 3. 리소스별 사용 기준

| 리소스 | 사용할 곳 | 사용 기준 |
|---|---|---|
| Motion.dev | 기본 애니메이션 구현 | opacity, transform 중심 |
| Motion for React | React 컴포넌트 모션 | framer-motion 방식으로 제한 적용 |
| Motion Examples | 패턴 참고 | 그대로 복붙하지 않고 단순화 |
| Motion Primitives | 카드, 탭, 섹션 전환 | 미니멀한 모션만 참고 |
| Animate UI | shadcn 기반 모션 컴포넌트 | 필요한 컴포넌트만 선택 적용 |
| Aceternity UI | 강한 인터랙션 참고 | 포트폴리오에는 거의 사용하지 않음 |
| React Bits | 인터랙티브 효과 참고 | 3D/글리치/파티클 금지 |
| Magic UI | subtle background/animated list 참고 | 배경 효과는 최소화 |

## 4. 권장 모션
| 영역 | 권장 모션 | 목적 |
|---|---|---|
| Project Card | hover lift, border change | 클릭 가능성을 전달 |
| Project Card Click | smooth scroll | 상세 섹션으로 자연스럽게 이동 |
| Section Entry | fade in + y 8px | 정보 흐름 연결 |
| Evidence Placeholder | subtle hover | 이미지/링크 영역임을 전달 |
| Contact Links | opacity 또는 underline | 클릭 가능성 전달 |

## 5. 금지 모션
- 과한 3D 회전
- 파티클 효과
- 글리치 효과
- 텍스트가 계속 움직이는 효과
- 의미 없는 bounce
- 큰 scale 변화
- 지나치게 긴 transition
- 스크롤할 때마다 반복되는 과한 등장 모션
- 사용자가 읽기 전에 사라지는 콘텐츠
- 정보보다 효과가 먼저 보이는 인터랙션

## 6. Motion Token
```ts
export const motionTokens = {
  duration: {
    fast: 0.16,
    normal: 0.24,
    slow: 0.36,
  },
  easing: {
    standard: [0.22, 1, 0.36, 1],
    gentle: [0.16, 1, 0.3, 1],
  },
  distance: {
    subtle: 8,
    normal: 16,
  },
};
```
