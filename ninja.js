
class Ninja{
    constructor(name) {
        this.name = name
        this.health = 100
        this.speed = 3
        this.strength = 3
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log("My name is " + this.name + " my strength is " + this.strength + " my speed is " + this.speed + " and my health is " + this.health + ".")
    }
    drinkSake() {
        this.health+=10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
