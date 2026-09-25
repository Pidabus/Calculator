let user = {
    name: 'Johnny', // These name properties are inherited by admin.
    surname: 'Smith',

    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    },
}

let admin = {
    isAdmin: true,
}

let admin2 = admin; // Both admin & admin2 hold pointers to the exact same location in memory.

Object.setPrototypeOf(admin, user);

// console.log(admin.fullName);   

admin.fullName = 'Alice Johnson';
console.log(admin.fullName);  
console.log(admin2.fullName);  
console.log(user.fullName); // user is a parent, that's why changing admin's properties don't affect the parent.