export function converterPxParaVh(px: number, alturaViewport: number): number {
  return (px / alturaViewport) * 100;
}

