const objectify = (arr) => {
  let output = {};

    arr.forEach((item) => {
   // if an item exists; output and that index equals
    let key = item[0];
    let value = item[1];
    output[key] = value;
  })
  return output;
}


const objectifyReduce = (arr) => {
  return arr.reduce((obj, item) => {
    let key = item[0];
    let value = item[1];
    obj[key] = value;
    return obj;
  }, {})
}
// console.log(objectifyReduce([["name", "corey"], ["age", 100]]))

// OPTIONAL WARM UP:  Palindrome Permutation: Given a string, write a function to
// check if it is a permutation of a palin- drome. A palindrome is a word or phrase
// that is the same forwards and backwards. A permutation is a rearrangement of
// letters.The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat". "atco cta". etc.) Ignore spaces.
