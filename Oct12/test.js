// let result = [];
// let arr = [1, 2, 3, 4, 5];
//
// // function double(num) {
// //   result.push(num * 2);
// // }
//
// arr.forEach(el => {
//   result.push(el * 2);
// });

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this);
  }
}

// console.log([1, 2, 3, 4].myForEach);

// Array.prototype.myMap = function (callback) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i]));
//   }
//   return result;
// }


// const median = (arr) => {
//   arr = sort(arr);
//   let midIdx = Math.floor(arr.length / 2);
//   if(arr.length % 2 === 0) {
//     return (arr[midIdx - 1] + arr[midIdx]) / 2;
//   } else {
//     return arr[midIdx];
//   }
// }
//
// const sort = (arr) => {
//   return arr.sort((a, b) => a - b)
// }
//
// let result = median([2, 3, 1, 4, 5, 6]);
//
// console.log(result);


// const equalTo = (val1, val2) => {
//   return val1 === val2 ? true : false;
// }
// console.log(equalTo(11, 11));

// const fizzBuzz = (num1, num2) => {
//   for (let i = num1; i <= num2; i++) {
//
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//       console.log("Fizz");
//     }
//     else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz(1, 100);


// const evens = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       console.log(arr[i]);
//     }
//   }
// }
// evens([11, 12, 2, 32, 3, 5, 7, 65, 44, 111]);


// const rangeWithStep = (min, max, step) => {
//   for (let i = min; i < max; i+=step) {
//
//   if (!step) {
//     step = 1;
//     } else {
//       console.log(i);
//     }
//   }
// }
// rangeWithStep(1, 100);

const doubles = (arr) => {
  let result = [];
  arr.forEach(el => {
    el * 2;
    result.push(el);
  })
}
console.log(doubles(1, 2, 3, 4, 5))
