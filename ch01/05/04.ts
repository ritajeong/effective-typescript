// ## any타입에는 언어서비스가 적용되지 않습니다.

//그림 1.3
let person = { first: "George" };
//ts 언어서비스를 통해 타입이 있는 심벌에 자동완성을 해준다.

//let person: any = { first: 'George' }
//any 타입인 심벌은 자동완성으로 속성이 나타나지 않음.

interface Person {
  first: string;
  last: string;
}

const formatName = (p: Person) => `${p.first} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`;

export default {};
