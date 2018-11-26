// // {-2, -5, 6, -2, -3, 1, 5, -6}
//
// function maxSubArrSum (arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let sumsArr = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j <= arr.length; j++) {
//       let currentSubArr = arr.slice(i,j)
//       let sum = currentSubArr.reduce((acc, currentEl) => {
//         acc += currentEl;
//         return acc;
//       })
//       sumsArr.push(sum);
//     }
//     console.log(`${sumsArr}`)
//   }
//
//   let highestSum = sumsArr.reduce((acc, currentEl) => {
//     if (acc > currentEl) {
//       acc = acc;
//     } else {
//       acc = currentEl;
//     }
//     return acc;
//   })
// return highestSum;
// }
//
// let arr = [-2, -5, 6, -2, -3, 1, 5, -6];
// console.log(maxSubArrSum(arr))
//
//
//
// const countDown = (num) => {
//   let arr = [];
//   for (let i = num; i >= 0; i--) {
//     arr.push(i);
//   }
//   return arr;
// }
//
// // console.log(countDown(6));
//
// const inBetweenNums = (start, end) => {
//   let arr = [];
//   for (let i = start; i <= end; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
//
// // console.log(inBetweenNums(24, 9));
//
// const larger = (n1, n2) => {
//   return n1 > n2 ? n1 : n2;
//
// }
//
// // console.log(larger(400, 200));
//
// const divisibleBy = (num, divisor) => {
//   let arr = [];
//   for (let i = 0; i <= num; i++) {
//     if (i % divisor === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
//
// // console.log(divisibleBy(40, 2))
//
// const divisible = (num, divisor) => {
//   let arr = [];
//   let start = divisor;
//   while (start <= num) {
//     arr.push(start);
//     start += divisor;
//   }
//   return arr;
// }
//
// // console.log(divisible(40, 2))
//
// const forDivideByTwo = (num) => {
//   let arr = [];
//   for (let i = num; i >= 1; i/=2) {
//     arr.push(Math.round(i))
//     }
//
//   return arr;
// }
//
// // console.log(forDivideByTwo(50))


const isEven = (num) => {
  // if number is less than zero; multiply by -1 to turn to positive number
    if (num < 0) {
      num = num * -1;
    }
  // Base Case: If num equals 0; return true; else if number equals 1; return false
    if (num === 0) {
      return true;
    } else if (num === 1) {
      return false;
    }
    //subtracting the number by 2 until you reach a base case
    else {
      return isEven(num -= 2);
  }
}

// console.log(isEven(14))

const getInRange = (start, end) => {
  if (start === end) {
    return end;
  } else {
    let arr = [];
    return arr.push(getInRange(start + 1, end))
  }
}

console.log(getInRange(2, 6))
