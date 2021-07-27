interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if ("height" in shape) {
    // 프로퍼티가 객체 안에 있는지  for in 문
    // in, instanceof 는 원래 js 예약어라서 컴파일에 개입되진 않음
    shape; // Type is Rectangle
    return shape.width * shape.height;
  } else {
    shape; // Type is Square
    return shape.width * shape.width;
  }
}

export default {};

//
