

// const readline = require('readline');
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// const responder = {
//   crazyResponse: (input) => {
//     return `Whoa! ${input} is pretty crazy!`
//   }
// }
//
// reader.question(`What's the craziest thing you've ever done? \n`, (res) => {
//   // console.log(responder.crazyResponse(res));
// });
//
// Array.prototype.myReduce = function(callback, acc) {
//   let startingIdx = 0;
//     if(!acc) {
//       acc = startingIdx;
//       startingIdx++;
//     }
//     for (let i = 0; i < this.length; i++) {
//       acc = callback(acc, this[i]);
//     }
//     return acc;
// }
//
// let meh = [1, 2, 3].myReduce((acc, currEl) => {
//   return el + currEl;
// })
//
// // console.log(meh);
//

// when we invoke our constructor functions using 'new' we are creating
  // an instance of that constructor which is an object.

function Dog(name, breed, weight, greeting) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.greeting = function() {
      return `Hello, my name is ${this.name}. I am a ${this.breed} breed, and I weigh ${this.weight} pounds.`;
    };
}

let charlie = new Dog("Charlie", "Mixed", "38");

// console.log(charlie.greeting());
class Fatty {
  constructor(food, cooked, servings) {
    this.food = food;
    this.cooked = cooked;
    this.servings = servings;
  }
}

Fatty.prototype.gorged = function() {
  return `Oh, yeah! I just ate ${this.servings} of ${this.cooked} ${this.food}.
  Totally won't regret it!`;
}

Fatty.prototype.combine = function(moarFood) {
  let food = (this.food + moarFood.food);
  let cooked = (this.cooked + moarFood.cooked);
  let servings = (this.servings + moarFood.servings);
  let newFood = new Fatty(food, cooked, servings);
  return newFood;
}

let bac = new Fatty("bacon", "fried", 12);
let egg = new Fatty("eggs", "poached", 5);
let chz = new Fatty("cheese", "melted", 8);
let fish = new Fatty("fish", "raw", 7);

console.log(bac.combine(chz));
