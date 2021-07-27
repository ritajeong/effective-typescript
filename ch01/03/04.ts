// 타입(런타임 접근 불가)과 값(런타임 접근 가능)을 둘 다 사용하는 기법
// : 타입을 클래스로 만들면 된다.

//인터페이스는 타입으로만 가능하지만,
//Rantangle을 클래스로 선언하면 타입과 값으로 모두 사용가능. 오류x

class Square {
  constructor(public width: number) {}
}
class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width);
  }
}
type Shape = Square | Rectangle; //Rentangle은 타입으로 참조됨.

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    //shape instanceof Rectange 부분에서는 값으로 참조됨.
    shape; // Type is Rectangle
    return shape.width * shape.height;
  } else {
    shape; // Type is Square
    return shape.width * shape.width; // OK
  }
}

export default {};
