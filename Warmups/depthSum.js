// check if val in arr has key within
// check if value within arr isArray
  // multiply ints within array by their depth
    // add up array

let arr = [[1, 2], 2, [1, 2]];


const sum = (input) => {
  let newArr = [];
  if(!Array.isArray(input)) {
    return input;
  } else if (input.length === 1) {
    return input[0];
  } else {
    let sliced = input.slice(1);
    return sum(input[0]) + sum(sliced);
  }
}


const nestSum = (arr, depth = 1) => {
	let output = 0;
	arr.forEach(el => {
		output += Array.isArray(el) ? nestSum(el, depth + 1) : el * depth
	})
	return output
}
