// WRITE A BINARYSEARCH FUNCTION.
// TAKES IN A SORTED ARRAY AND A TARGET.
// FIND BASE CASE WHEN THE TARGET IS NOT IN ARRAY.
// GET MIDDLE INDEX
// COMPARE MIDDLE ELEMENT TO THE TARGET.
// DECIDE IF FOUND, SMALLER, OR LARGER.
// CALL BSEARCH AGAIN. DON'T FORGET TO ACCOUNT FOR 0TH INDEX.

// const binarySearch = (arr, target) => {
//   let mid = Math.floor(arr.length / 2);
//   if (arr.length === 0) {
//     return -1;
//   } else
//     if (arr[mid] === target) {
//       return mid;
//     } else
//     if (arr[mid] > target) {
//       return binarySearch(arr.slice(0, mid))
//     } else {
//       if (arr[mid] < target) {
//         let result = binarySearch(arr.slice(mid + 1), target)
//         return result !== -1 ? mid + result + 1 : -1
//       }
//     }
// }
// let arr = [1, 2, 3, 4, 5, 6]
// console.log(binarySearch(arr, 1))

// let arr = [1, 2, 3, 4, 5, 6]
// let mid = Math.floor(arr.length / 2);
// console.log(++mid)


// const binarySearch = (arr, target, start = 0, stop = arr.length) => {
//   if (start >= stop) { return -1 }
//   let mid = Math.floor((start + stop) / 2)
//   if (arr[mid] === target) {
//     return mid;
//   } else if (arr[mid] > target) {
//     return binarySearch(arr, target, start, mid)
//   } else {
//     return binarySearch(arr, target, mid + 1, stop)
//   }
// }
//
// let arr = [1, 2, 3, 4, 5, 6]
// console.log(binarySearch(arr, 6))



const rever = (str) => {
  if (str.length === 0) { return '' }
  let pop = str.split().pop();
  pop.concat(str);
  return rever(str)
}

let str = 'belly full of jelly'
console.log(rever(str))
