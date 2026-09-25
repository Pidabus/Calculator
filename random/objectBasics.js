let obj1 = {
    name: 'Affiq',
    surname: 'Firdaus',
}

let obj2 = {}

obj2 = obj1;

// obj2.name = 'Diddy';  ==> mutates both obj1 and obj2
// obj2 = {  ==> Creates a new object
//     name: 'Diddy',
// }

console.log(obj1);
console.log(obj2);