// function fiveSecs(str){
//   console.log("It's been five seconds");
// }

// setTimeout(fiveSecs, 5000);
// setTimeout(() => {
//   console.log("It's been five seconds.")
// }, 5000)

let i = 0;
let stopInterval = setInterval(() => {
  if (i === 5) {
    clearInterval(stopInterval);
  } else {
    console.log(i);
    i++;
  }
}, 1000)


let j = 10;
let countDown = setInterval(() => {
  if (j === 10) {
    clearInterval(countDown);
  } else {
    console.log(j);
    i--;
  }
}, 500)


//
// for (let i = 10; i <= 0; i--) {
//   let countDown = setInterval(() => {
//       console.log(i);
//       if (i === 0) {
//         clearInterval(countDown);
//       }
//   }, 500)
// }

//
//
