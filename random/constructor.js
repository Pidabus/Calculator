function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function () {
        console.log(`Welcome! ${this.name}`);
    }
}

const player = new Player("John", "X");
player.sayName();