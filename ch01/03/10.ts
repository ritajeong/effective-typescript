// ## 타입스크립트 타입으로는 함수를 오버로드할 수 없습니다
function add(a: number, b: number) {
  return a + b;
}
// ~~~ Duplicate function implementation
function add(a: string, b: string) {
  return a + b;
}
// ~~~ Duplicate function implementation

export default {};
