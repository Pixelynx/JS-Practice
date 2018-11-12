Array.prototype.recursiveFilter = function(callback, output = [], idx = 0) {
  if (idx === this.length) {
    return output;
  }
  if (callback(this[idx])){
  output.push(this[idx]);
}
  return this.recursiveFilter(callback, output, ++idx);
}

Array.prototype.myFilter = function(callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      output.push(callback(this[i]))
    }
  }
  return output;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8]

let that = arr.recursiveFilter(el => {
  if (el % 2 === 0) {
    return el;
  };

})

console.log(that);
