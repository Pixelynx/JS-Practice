let list1 = [
   {firstName: 'Maria',
    lastName: 'Y.',
    age: 30,
    language: 'JavaScript'},

   {firstName: 'Victoria',
    lastName: 'T.',
    age: 35,
    language: 'Python'},

   {firstName: 'Victoria',
    lastName: 'T.',
    age: 38,
    language: 'Python'},
];

const getAvgAge = (arr) => {
  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i]['age'];

  let sumAges = arr.reduce((acc, currEl) => {
    return acc + currEl['age'];
  }, 0)

  return Math.round(sumAges / arr.length);
  }


  let arr = [30, 35, 38, 44, 25];

  let reduced = arr.reduce((acc, currEl) => {
    return acc + currEl;
  })

  console.log(reduced / arr.length);




// console.log(Object.values(list1))
// console.log(getAvgAge(list1));/
