// tsConfig: {"noImplicitAny":true,"strictNullChecks":false}

const x: number = null; // OK, null is a valid number

export default {};

//x'이(가) 선언은 되었지만 해당 값이 읽히지는 않았습니다.ts(6133)
//'null' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)
