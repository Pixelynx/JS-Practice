document.addEventListener("DOMContentLoaded", () => {

const fireRequest = async () => {
  let response = axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log(response);
};

fireRequest();




})


// document.addEventListener("DOMContentLoaded", () => {
//
// async function doubler(num) {
//   return num * 2
// }
//
// async function square(num) {
//   return num * num
// }
//
// async function multiply(num1, num2) {
//   return num1 * num2
// }
//
// // function doMath(num) {
// //   doubler(num)
// //   .then(double => {
// //     return square(double)
// //     .then(squared => {
// //       return multiply(double, squared)
// //       .then(answer => {
// //         console.log(answer)
// //       })
// //     })
// //   })
// // }
//
// async function betterMath(num) {
//   let double = await doubler(num);
//   let squared = await square(double);
//   let answer = await multiply(double, squared);
//   console.log(answer);
// }
//
// betterMath(4)
//
//
//
//
// })




// document.addEventListener("DOMContentLoaded", () => {
//
//
//   const fireRequest = async (url, callback) => {
//     try {
//       let response = await axios.get(url);
//       callback(response.data);
//     } catch (err) {
//       console.log("The error thrown was: ", err);
//     }
//   };
//
//   function displayPost(arr) {
//     let posts = document.querySelector(".posts")
//     arr.forEach(post => {
//       let newLi = document.createElement("li")
//       newLi.innerText = post.body
//       posts.append(newLi)
//     })
//   }
//   fireRequest("https://jsonplaceholder.typicode.com/posts/", displayPost);
//
//
// });
