
const secondLargest = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secLargest = Number.NEGATIVE_INFINITY;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secLargest = largest;
      largest = arr[i];
    } else if (arr[i] > largest){
      secLargest = arr[i];
    }
  }
  return secLargest;
}

// console.log(secondLargest[2, 4, 1, 7, 3, 9]);
// output = 7

const recursiveRange = (start, end) => {
  let results = [];
  if (start === end) {
    return results;
  } else {
    results.push(start);
    return results.concat(recursiveRange(start + 1, end));
  }
}

console.log(recursiveRange(2, 9));
