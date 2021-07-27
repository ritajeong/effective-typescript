// tsConfig: {"noImplicitAny":true,"strictNullChecks":true}

const el = document.getElementById("status");
el.textContent = "Ready";
// ~~ Object is possibly 'null'
//개체가 'null'인 것 같습니다. -> Object가 null일 수도 있다. 객체가 널일 가능성이 있다.

if (el) {
  el.textContent = "Ready"; // OK, null has been excluded
}
el!.textContent = "Ready"; // OK, we've asserted that el is non-null
// !표시: 강제 캐스팅
// 참고 https://stackoverflow.com/questions/42273853/in-typescript-what-is-the-exclamation-mark-bang-operator-when-dereferenci

//strict: true를 주었을 때 관련 옵션들이 한꺼번에 활성화된다고 한다...
export default {};
