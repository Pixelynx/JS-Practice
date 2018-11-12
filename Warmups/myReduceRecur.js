Array.prototype.myReduce = function(callback, acc) {
  let startIdx = 0;
  if (!acc) {
    acc = startIdx;
    startIdx++;
  }
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i])
  }
  return acc;
}

let arr = [2, 3, 4, 5];
// console.log(arr.myReduce((el, acc) => {
//   return el + acc;
// }))

Array.prototype.myRecurReduce = function(callback, acc, startIdx = 0) {
  if (startIdx === this.length) {
    return acc;
  }
  if (acc === undefined) {
    acc = this[startIdx];
    startIdx++;
  }
  acc = callback(acc, this[startIdx])
  return this.myRecurReduce(callback, acc, ++startIdx)
}

console.log(arr.myRecurReduce((el, acc) => {
  return el + acc;
}))
