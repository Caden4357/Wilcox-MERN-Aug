class Ninja {
    constructor(name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`Name: ${this.name}, health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    }
    drinkSake(){
        this.health += 10;
        console.log(this.health)
    }
}
class Sensei extends Ninja{
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("This is a wise message by a wise man")
    }
}


const ninja1 = new Ninja("Caden", 100);
const sensei1 = new Sensei("Bob")
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
sensei1.speakWisdom();
sensei1.showStats();