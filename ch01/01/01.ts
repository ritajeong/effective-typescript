// # 아이템1 타입스크립트와 자바스크립트의 관계 이해하기
// ts는 js의 상위집합이다
// ts는 타입이 정의된 js의 상위집합이다

// 모든 js 프로그램이 ts라는 명제 = 참
// 그 반대는 성립하지 않음
function greet(who: string) {
  console.log("Hello", who);
}

greet("jn");

export default {};
