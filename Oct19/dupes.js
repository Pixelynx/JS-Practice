let thisArr = [1, 2, 1, 1, 3, 2];
const removethDupes = (arr) => {
  let noDupes = [];
  for (let i = 0; i < arr.length; i++) {
    if (!noDupes.includes(arr[i])) {
      noDupes.push(arr[i]);
    }
  }
  return noDupes;
}
// console.log(removethDupes(thisArr));

// checks if the instance of the index already exists
// if the index of the el is greater than a previous instance; removes it
const removeDupes = (arr) => {
  let dupes = arr.filter((el, idx) => {
    return arr.indexOf(el) >= idx;
  })
  return dupes;
}
// console.log(removeDupes(thisArr));

const rmDupes = (arr) => {
  let result = [];
  arr.forEach(el => {
    if (!result.includes(el)) {
      result.push(el);
    }
  })
  return result;
}

// console.log(rmDupes([1, 2, 1, 1, 3, 2]));

const removeththDupes = (arr) => {
  let results = {};
  for (let i = 0; i < arr.length; i++) {
    results[arr[i]] = arr[i];
  }
  // Object.values takes in the values and returns an array
  return Object.values(results);
}
// console.log(removeththDupes(thisArr));

// best method
const rmethDupes = (arr) => {
  let resuleth = {};
  arr.forEach(el => resuleth[el] = el);
  return Object.values(resuleth);
  }

// console.log(rmethDupes(thisArr));
