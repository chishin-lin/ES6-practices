//
let x = 'outer';
function test(a) {
  if (a) {
    let x = 'inner';
    return x;
  }
  return x; // 从第一行获取到预期结果
}
test(false); // outer
test(true); // inner