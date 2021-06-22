const a = 1;
a = 2;
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
