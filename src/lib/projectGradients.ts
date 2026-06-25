// 프로젝트 카드/상세 번호 배지에서 공유하는 그라데이션 팔레트 (index 순환)
export const PROJECT_GRADIENTS: [string, string][] = [
  ["#f6cf1c", "#e8a317"], // amber
  ["#5fa8e6", "#2b6fd6"], // blue
  ["#6cc28d", "#2e9e63"], // green
  ["#cfc7f5", "#8557db"], // violet
  ["#7fd0c0", "#3a9e8f"], // teal
  ["#f3a98f", "#e8693f"], // coral
];

export function projectGradient(index: number): [string, string] {
  return PROJECT_GRADIENTS[index % PROJECT_GRADIENTS.length];
}

export function projectGradientCss(index: number): string {
  const [c1, c2] = projectGradient(index);
  return `linear-gradient(140deg, ${c1} 0%, ${c2} 96%)`;
}
