// ## any는 함수 시그니처를 무시해 버립니다.
let age: number;
age = "12";
// ~~~ Type '"12"' is not assignable to type 'number'
age = "12" as any; // OK
function calculateAge(birthDate: Date): number {
  // COMPRESS
  return 0;
  // END
}

let birthDate: any = "1990-01-19";
calculateAge(birthDate); // OK

export default {};
