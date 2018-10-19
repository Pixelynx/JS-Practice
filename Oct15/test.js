// // ** TRANSPOSE ARRAY ** //
//
// const transposeArr = (a) => {
//   return Object.keys(a[0]).map(b => {
//     return a.map(c => {
//       return c[b];
//     })
//   })
// }
// // console.log(transposeArr([
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9]
// // ]))
//
// const transpose = (mtx) => {
//   .
// }
//
// let mtx = [[2, 3, 4, 12], [5, 6, 7, 14]];
// // [[2, 5, 8], [3, 6, 9], [4, 7, 10]]
//
// // console.log(transposeArr(mtx));
//
//
// Array.prototype.myReduce = function(callback, startVal) {
//   let startingIdx = 0;
//   if (!startVal) {
//     startVal = this[0];
//     startingIdx++;
//   }
//   // reduced takes in callback and opt acc
//   //cb takes in acc and currEl
//   // currEl starts with first el in array if opt acc in valid
//   // if optacc wasn't passed; acc is first else {
//     //currel becomes seconds else {
//
//     }
//   }
//   for (let i = startingIdx; i < this.length; i++) {
//     startVal = callback(startVal, this[i]);
//   }
//   return startVal;
// }
//
// let arr = [1, 2, 5, 3, 4];
//
// let result = arr.myReduce((acc, currEl) => {
//   return acc + currEl;
// }, 5)

// console.log(result);


const factors = (num) => {
  let output = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      output.push(i);
    }
  }
  return output;
}
// console.log(factors(55));

const largest = (arr) => {
  let large = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  return large;
}
// console.log(largest([1, 2, 3, 4, 5]))


// checks if both values are truthy
const and = (arg1, arg2) => {
  // return !!(arg1 && arg2);

//   if (arg1 && arg2) {
//     return true;
//   } else {
//     return false;
//   }
return arg1&&arg2 ? true : false;
}



// console.log(and("hello", ""))


// conditional operators do not do type conversions; booleans do


const includes = (arr, tar) => {
  // let exists = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === tar) {
      return true;
    }
  }
  return false;
}
// console.log(includes([1, 2, 3, 4], 4))

const disemvowel = (str) => {
  let result = '';
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}
// console.log(disemvowel("Hello world"))

const myCallback = (sub, cb) => {
  return cb(sub);
}

myCallback(2, (int) => {
  return int * 2;
})

// console.log(myCallback());



// let namesArr = ["T'Keya", "Johnny", "Yulonda"];
// let resultArr = [];
//
// for (let i = 0; i < namesArr.length; i++) {
//   resultArr.push("Hi" + namesArr[i]);
// }
// console.log(resultArr)


Array.prototype.myMap = function(callback) {
  // let resultArr = [];
  [this].forEach((el) => {
    // resultArr.push(el);
    callback(this[el]);
  });
};

[2, 4, 6].myMap(el => {
  // console.log(el*2);
})


// let sum = 10;
// let arr = [1, 2, 3];
//
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum)


let arr = [1, 2, 3];

let sum = arr.reduce((acc, el) => {
  return el + acc;
}, 10);

// console.log(sum)


//Every: want to start off true
//Some: want to start off false

let matches = [
  {name: "Esmeralda", available: false},
  {name: "Regis", available: true},
  {name: "Face", available: true}
]

let someAvailable = false;

for (let i = 0; i < matches.length; i++) {
  if (matches[i].available) {
    someAvailable = true
  }
}
// console.log(someAvailable);


Array.prototype.myEvery = function(callback) {
  for (let i = 0; i < this.length; i++) {
    return (!(callback(this[i], inode))) ? false : true;
    // if (callback(this[i])) {
    //   return true;
    // }
  }
}

function greaterThan10(num) {
  return num === 10;
}
let anArr = [10, 11, 10, 10];

let everied = anArr.myEvery(el, i, arr) => {
    return el === arr[0]
});


let anybody = matches.some(el => {
  return el.available;
})

// console.log(anybody)
