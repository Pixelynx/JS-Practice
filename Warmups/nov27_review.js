const reduceOdds = (arr) => {
  return arr.reduce((acc, currEl) => {
    if (!(currEl % 2)) {
    acc.push(currEl);
  }
  return acc;
  }, [])
}

const heyBye = (arr) => {
  // return arr.map(el => el % 2 ? `BYE` : `HEY`);

  return arr.reduce((acc, currEl) => {
    if (!(currEl % 2)) {
      acc.push(`HEY`)
    } else {
      acc.push(`BYE`);
    }
    return acc;
  }, [])
}

const target = (arr, targ) => {
  return arr.reduce((acc, currEl) => {
    if (currEl === targ) {
      acc = true;
    }
    return acc;
  }, false)
}

const bubbleSort = (arr) => {
  let notSorted = true;
  while(notSorted) {
    notSorted = false;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
    }
  }
}
  return arr;
}


// console.log(bubbleSort([11, 2, 6, 4, 88, 13, 5]));

const merge = (arr1, arr2) => {
  let output = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      output.push(arr1.shift())
    } else {
      output.push(arr2.shift());
    }
  }
  return [...output, ...arr1, ...arr2];
}


const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    let sortLeft = mergeSort(left);
    let sortRight = mergeSort(right);
    return merge(sortLeft, sortRight);
  }
}

console.log(mergeSort([1, 4, 6, 2, 3, 5]));

// let arr = [1, 2, 3, 4, 5, 6]
// let mid = arr.length / 2;
// console.log(arr.slice(mid))
