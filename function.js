//
let x = "outer";
function test(a) {
  if (a) {
    let x = "inner";
    return x;
  }
  return x; // 从第一行获取到预期结果
}
test(false); // outer
test(true); // inner

//数组解构去获取元素或交换值
let user = { name: "Lily", age: 23 };

function getUser({ name, age }) {
  return `My name is ${name}. I'm ${age} years old. `;
}
console.log(getUser(user));

//

function settings(a, b) {
  let color = { backGround: { Color: a } };
  let size = { fondSize: { size: b } };

  return { color, size };
}
let a = "red";
let b = 14;
console.log(settings(a, b));
