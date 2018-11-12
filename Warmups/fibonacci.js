const fib = (n) => {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1]);
  }
  return arr
}

// console.log(fib(4))

// n = 4; i = 2
// n = 5; i = 2
// push(0) push(1)
//
//


const fibs = (n) => {
  if (n < 2) {
    return n;
  }
  return fibs(n - 1) + fibs(n - 2);
}


const factorialize = (num) => {
  if (num < 0)
    return -1;
  else if (num === 0)
    return 1;
  else {
    return (num * factorialize(num - 1));
  }
}

// console.log(factorialize(5))

// 5 * factorialize(5 - 1)
// 4 * factorialize(4 - 1)

const recursiveSum = arr => {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + recursiveSum(arr.slice(1, arr.length));
};

let arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(recursiveSum([1, 2, 3, 4, 5]))

let str = 'belly full of jelly'
console.log(str.split(' ').reverse().join(' '))
