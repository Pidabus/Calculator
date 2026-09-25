let user = {
  name: "John",
  surname: "Smith",

  SetFullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(admin.fullName); // John Smith (*)

admin.SetFullName("John Smith");