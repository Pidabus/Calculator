// let animal = {
//     walk() {
//         if (!this.isSleeping) {
//             alert(`I walk`);
//         }
//     },
//     sleep() {
//         this.isSleeping = true;
//     }
// };

// let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
// };

// // modifies rabbit.isSleeping
// rabbit.sleep();

// alert(rabbit.isSleeping); // true
// alert(animal.isSleeping); // undefined (no such property in the prototype)

let dead = true;

if(dead) { 
    console.log("Dead");
}
else {
    console.log("I am Alive");
}