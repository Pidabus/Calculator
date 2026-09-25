let animal = {
  eats: true
};
let rabbit = {
  jumps: true,
//   __proto__ : animal, ==> This works, but __proto__ is not accepted.
};

Object.setPrototypeOf(rabbit, animal); // Sets animal to be the prototype of rabbit. Plain objects don't have prototypes, 
console.log(rabbit.eats);              // which is why it's just the reference used. 