const sumArr = (arr) => {
  if (arr.length === 0) { return 0; }
  return arr.pop() + sumArr(arr);
}

const rangeWithStep = (start, end, step, arr = []) => {
  if (start >= end) { return arr; }
  arr.push(start)
  start += step
  return rangeWithStep(start, end, step, arr);
}

// console.log(rangeWithStep(2, 10, 3))

// const rangeWithStep = (start, end, step = 1) => {
//   for (let i = start; i < end; i+=step) {
//
//   }
// }
