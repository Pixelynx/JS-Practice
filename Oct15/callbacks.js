// Callback functions are used when we want to call something at a specific time.

// setInterval: calls callback every millsecs that is defined

// function sayHello() {
//   // console.log('hello')
// }

// setInterval(sayHello, 1000);

// Anonymous function
  // used for functions that we'd only want to call once
setInterval(() => {
  console.log('Hello');
}, 1000);



  // "Asynchronous programming"
    // a program will only print after the set amount of time for function has passed
// console.log('This prints before "sayHello"');
