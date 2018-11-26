// let promise = new Promise(function(resolve, reject) {
//   // do a thing, possibly async, then…
//
//   if (true) {
//     resolve("Stuff worked!");
//   }
//   else {
//     reject(Error("It broke"));
//   }
// });


let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 2000);

}).then((result) => {
  alert(result);
  return result + 2;
}).then((result) => {
  alert(result);
  return result + 2;
}).then((result) => {
  alert(result);
  return result + 2;
});


console.log(promise);
