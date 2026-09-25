function Book(title, author, pages, haveRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

    this.info = function () {
        // console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}`); ==> It's better not to use console.log() directly in the function for flexibility.
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}`);
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read yet");
// console.log(theHobbit.info());

// console.log(Object.getPrototypeOf(theHobbit) === Book.prototype);
// console.log(Object.getPrototypeOf(Book.prototype) === Object.prototype)
console.log(theHobbit.valueOf());

// Book.prototype.sayHello = function() {
//   console.log("Hello, I'm a player!");
// };

// console.log(Book.prototype); 