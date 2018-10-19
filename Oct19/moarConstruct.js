class Fighter {
  constructor(name, race, attack) {
    this.name = name;
    this.race = race;
    this.attack = attack;
  }
  warning() {
    return `Look out for the ${this.race}, ${this.name}. They're getting ready to use
    their ${this.attack} attack!`;
  }
}

class Yam extends Fighter {
  constructor(name, race, attack) {
    super(name, race, attack);
  }
  warning() {
    return `Look out for the ${this.race}, ${this.name}. He's getting ready to use
    his ${this.attack} attack! Oh ... Nevermind.`;
  }
};

let carrot = new Fighter("Goku", "Saiyan", "Kamehameha Wave");
let veggie = new Fighter("Vegeta", "Saiyan", "Big Bang");
let disappointment = new Yam("Yamcha", "Human", "Wolf Fang Fist");

// console.log(veggie.warning());
console.log(disappointment.warning());
