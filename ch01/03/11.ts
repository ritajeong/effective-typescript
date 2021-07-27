// tsConfig: {"noImplicitAny":false}

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: boolean, b: boolean): string;

// function add(a, b) {
//   return a + b;
// }

//무적의 애니
function add(a: any, b: any) {
  return a + b;
}

const three = add(1, 2); // Type is number
const twelve = add("1", "2"); // Type is string
const thirtteen = add(false, true);
console.log(thirtteen);

// export default {};
