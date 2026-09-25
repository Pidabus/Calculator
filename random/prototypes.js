function Person(name) {
    this.name = name;
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

Person.prototype.sayName = function() {
    console.log(`Hi!, I'm ${this.name}`);
}

Object.setPrototypeOf(Player.prototype, Person.prototype);

// const player1 = new Player('Pidabus', 'X');

// player1.sayName();

const test = Object.getPrototypeOf(Person.prototype) === Object;
console.log(test);