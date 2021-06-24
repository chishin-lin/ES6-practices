/*const a = 1;
//a = 2;
console.log(a); //1
const b = {
  name: "lily",
};
b.age = 23;
console.log(b); //{ name: 'lily', age: 23 }

//scope chain
let c = (() => {
  console.log("c");

  let c1 = "c1";
  console.log(c1);
})();
console.log(c1); //ReferenceError: c1 is not defined
*/

//NO.1
let num1 = 1;
let num3 = 3;

let w = (function () {
  let num2 = 2;

  let a = (function () {
    return num2 * num3;
  })();
  return a + num3;
})();
console.log(w);

//NO.2
function getNumber(a) {
  //let a = 2;

  function A() {
    return a
     * num3;
  }

  return A() + num3;
}
console.log(getNumber(1));

