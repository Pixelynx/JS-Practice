const capitalizeWithExceptions = (str, arr) => {
  // split string into an array of words
  let wordArr = str.split(" ")
  // create an object to be able to access each banned word easier - "includes" is a loop, but noGoObj["and"] is one tick
  let noGoObj = {};

  // loop through our array of banned words and set the object's key to the element and the value to "true". "true" is arbitrary - any truthy value helps with our if/else logic below.
  arr.forEach((el) => {
    noGoObj[el] = true;
  })

  // loop through the array
  let capitalizedArr = wordArr.map((el) => {
    // if there is NOT a truthy value in our object for that element...
    if (!noGoObj[el]) {
      // we want to capitalize that element, because it isn't a banned word.
      return (el[0].toUpperCase() + el.slice(1));
    } else {
      // otherwise, it DOES have a truthy value, so we don't want to capitalize it.
      return el;
    }
  })

  // join our array at the end to turn it back into a string. include the space as an argument to make sureouroutputdoesn'tlooklikethis.
  return capitalizedArr.join(" ")
}

// console.log(
//   capitalizeWithExceptions("it's a beautiful morning", ["it's", "a"])
// );

// const capWithExcept = (str, arr) => {
//   let wordArr = str.split(" ");
//   let noGoObj = {};
//
//   arr.forEach((el) => {
//     noGoObj[el] = true;
//   })
//
//   // console.log(noGoObj);
//
//   let aCappedArr = wordArr.map((el) => {
//     if (!noGoObj[el]) {
//       return (el[0].toUpperCase() + el.slice(1));
//     } else {
//       return el;
//     }
//   });
//   return aCappedArr.join(" ");
//
//   // let aCappedArr = wordArr.map((el) => {
//   //   if (!arr.includes(el)) {
//   //     return (el[0].toUpperCase() + el.slice(1));
//   //   } else {
//   //     return el;
//   //   }
//   // });
//   // return aCappedArr.join(" ");
// }
// console.log(capWithExcept("bacon and eggs", ["and", "but", "or"]));
