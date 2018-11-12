Array.prototype.myMapRecur = function(callback, output = [], idx = 0) {
  if (this.length === output.length) {
    return output;
  }
  output.push(callback(this[idx]))
  // idx++;
  return this.myMapRecur(callback, output, ++idx);
}

console.log([1, 2, 3, 4, 5].myMapRecur(el => {
  return el * 2;
}));



Array.prototype.myMap = function(callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i]) {
      newArr.push(callback(this[i]))
    }
  }
  return newArr;
}

// console.log([1, 2, 3, 4, 5].myMap(el => {
//   return el * 2;
// }));
