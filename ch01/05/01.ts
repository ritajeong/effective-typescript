// # 아이템5 any 타입 지양하기
let age: number;
age = "12";
// ~~~ Type '"12"' is not assignable to type 'number'
age = "12" as any; // OK

export default {};
