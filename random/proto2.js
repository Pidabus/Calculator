let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

Object.setPrototypeOf(rabbit, animal); // Sets animal to be the prototype of rabbit.
console.log(rabbit.eats);