let txt = "armand szia armand szia armand";
console.log(txt.slice(0, 5));
console.log(txt.slice(3, 8));
console.log(txt.slice(4));
console.log(txt.slice(4, 10));
console.log(txt.toUpperCase());
let text = " ";
for (let i = 0; i < txt.length; i++) {
  text += i % 2 === 1 ? txt[i].toUpperCase() : txt[i];
}
console.log(txt.replace("e", "E"));

const tomb = txt.split(/e/i);
console.log(tomb);
