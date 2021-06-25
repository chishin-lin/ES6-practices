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

//function建立物件
function settings(a, b) {
  let color = { backGrxound: { Color: a } };
  let size = { fondSize: { size: b } };

  return { color, size };
}

//let x = {color = { backGrxound: { Color: "red" } }, size = { fondSize: { size: 14 } };}

//console.log(settings(a, b));

const str = "hello";
const [u, y, z, d, e] = str;

console.log(u, y, z, d, e);
