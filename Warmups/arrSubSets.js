const sumOfRange = (start, end) => {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr.reduce((acc, currEl) => acc + currEl);
}

const sum = (start, end) => {
  let total = 0;
  for (let i = start; i < end; i++) {
    total += i;
  }
  return total;
}

// console.log(sumOfRange(2, 9));

const sumOfArr = (arr) => {
  let output = 0;
  arr.forEach(el => output += el)
  return output;
}

// console.log(sumOfArr([1, 2, 3, 4, 5]))

const multByArg = (arr, num) => {
  return arr.map(el => el * num);
}

// console.log(multByArg([1, 2, 3, 4, 5], 2))

// subsets([]) // => [[]]
// subsets([1]) // => [[], [1]]
// subsets([1, 2]) // => [[], [1], [2], [1, 2]]
// s1ubsets([1, 2, 3])
// // => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
// You can implement this as an Array method if you prefer.

const subsets = (arr) => {
  let idk = arr.reduce((el, currVal) => {
    el.concat(el.map(set => [currVal, ...set]))
  }, [])
  return idk;
}

// console.log(subsets([1, 2, 3]))
