// ## 타입 연산은 런타임에 영향을 주지 않습니다
function asNumber(val: number | string): number {
  return val as number;
}

export default {};
