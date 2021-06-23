//for+settimeout
for (let i = 1; i < 30; i++) {
  setTimeout(() => {
    console.log(i);
  }, 500 * i);
}

let i = 0;
const a = setInterval(() => {
  console.log(++i);
  if (i === 5) clearInterval(a);
}, 500);
