//Kristjan Krimm
//19.12.2021
//task1.js

let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

function mergeArray(a, b) {
  var c = a.concat(b.filter((item) => a.indexOf(item) < 0));
  return c;
}

console.log(mergeArray(array1, array2));
