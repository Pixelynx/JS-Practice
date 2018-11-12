// const removeDupsExcept = (str1) => {
//   str1 = str1.split('');
//   // str2 = str2.split('');
//   let result = {};
//
//   str1.forEach(el => {
//     result[el] = el;
//   })
//   return Object.values(result).join('');
// }

// console.log(removeDupsExcept('people'))

const removeDupsExcept = (str, ex) => {
  let exObj = {};
  let resultObj = {};
  let result = '';

  if (!exObj[str[i]]) {
    result += str[i];
  }
  else if (!resultObj[str[i]]) {
    result += str[i]
  }
}
