const palindrome = (str) => {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1]) {
      return false;
    }
      return true;
  }
}c
// console.log(palindrome('ratstar'));

// let arr = [1, 4, -2, -9, 2];
//
// const repeat = (arr) => {
//   let empt = []
//   let ar = arr.reduce((acc, currEl) => {
//     if(acc === currEl) {
//       empt.push(acc)
//     }
//
//   })
//   return empt;
//
// }
// console.log(repeat([1, 4, -2, -9, 2, -2]))

const sumOfEven = (arr) => {
  let sum = 0;
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
  }
  let counter = 0;
  while (counter < 5) {
    sum = evenArr[0]+evenArr[1]+evenArr[2]+evenArr[3]+evenArr[4];
    return sum;
  }
}
// console.log(sumOfEven([3,7,-3,2,9,4,8,10,3,9,4,9,8,6,-2]))


// const sumOfEven = (arr) => {
//   let sum = 0;
//   let evenArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenArr.push(arr[i]);
//     }
//     let sums = evenArr
//     for(let j = 0; j < evenArr.length[4]; j++){
//
//     }
//   }
//
// }


const twoNum = (arr, targ) => {
  let sumBoolean = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targ) {
        sumBoolean = true;
      }
    }
  }
  return sumBoolean;
}

// console.log(twoNum([1, 3, 5, 4, 2], 7));
// console.log(twoNum([1, 3, 5, 4, 2], 2))



function secLarge(arr) {
  let sortArr = arr.sort((a,b) => {
    return b-a;
  });
  let secLarge = sortArr[1];
  return secLarge;
}

//console.log(secLarge([1, 4, -2, -9, 2, 5, -1, 10, 4]))

function largestProductOf2 (arr) {
  let prod = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
      prod.push(arr[i] * arr[j]);
    }
      }
    }
    prod.sort((a,b) => {
      return b-a;
  })
  return prod;
}

// console.log(largestProductOf2([1, 2, 7, 3, 9, 5]))

// Array.prototype.myReduce = function(callback, acc) {
//   let startingIdx = 0;
//   if (!acc) {
//     acc = this[0];
//     startingIdx++
//   }
//   for (let i = 0; i < this.length; i++) {
//     acc = callback(acc, this[i]);
//   }
//   return acc;
// }
//
// let arr = [1, 2, 3, 4, 5];
// let meh = arr.myReduce((acc, currEl) => {
//  return acc + currEl;
// }, 5)
// console.log(meh)


Array.prototype.myReduce = function(callback, acc) {
  let startingIdx = 0;
  if (!acc) {
    acc = startingIdx;
    startingIdx++;
  }
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
}

let arr = [1, 2, 3, 4, 5];
let meh = arr.myReduce((acc, currEl) => {
 return acc + currEl;
}, 5)
console.log(meh)
