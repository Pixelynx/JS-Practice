const reverseRotate = (arr) => {
  arr = arr.reverse();
  for (let i = 0; i < arr.length; i++) {
    let pop = arr.pop();
    let unshift = arr.unshift(pop);
    return arr;
  }
}

let arr = ['d', 'o', 'g'];
console.log(reverseRotate(arr));

// dog
  //reversed
// god
  // rotate
  // dgo
