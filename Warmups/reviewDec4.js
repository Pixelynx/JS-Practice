const bubbleSort = (arr) => {
  let notSorted = true;
  while(notSorted) {
    notSorted = false;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
      notSorted = true;
    }
  }
}
  return arr;
}

// console.log(bubbleSort([5, 1, 12, 0, 2, 45]));

const merge = (arr1, arr2) => {
  let sortedArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      sortedArr.push(arr2.shift())
    } else {
      sortedArr.push(arr1.shift())
    }
  }
  return sortedArr.concat(arr1).concat(arr2);
}

// console.log(merge([1, 3, 5], [2, 4, 6]));


const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    let sortLeft = mergeSort(left);
    let sortRight = mergeSort(right);
    return merge(sortLeft, sortRight);
  }
  };


// console.log(mergeSort([3, 23, 1, 11, 56, 4, 3, 76]))


// function quickSort
// recursive function.
// base case ? When is an array guaranteed to be sorted.
// choose a pivot (for now last element in array)
// find all el's to left and store as array.
// find all el's to right
// This should be done in one loop.
// return quckSort left concatted with pivot and quickSort right.

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
    let pivot = arr.pop();
    let leftArr = [];
    let rightArr = [];
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
    return quickSort(leftArr).concat(pivot).concat(rightArr);
  }


console.log(quickSort([11, 21, 4, 52, 5, 10]));
