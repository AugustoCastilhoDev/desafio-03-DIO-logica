class Hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = {};
        
        if(type === "Warrior"){
            this.type = ("Warrior, attacked using sword");

        } else if(type === "Mage"){
            this.type = ("Mage, attacked using magic")

        } else if(type === "Monk"){
                this.type = ("Monk, attacked using martial arts")
        
        } else if(type === "Ninja"){
                    this.type = ("Ninja, attacked using shuriken")

        } else {this.type = ("## Hello Hero, set your name, age and type of choice please ##")

        }
    }

    attack(){
        console.log(`${this.name} - ${this.age}, ${this.type};\n`)
        console.log("------------------------------------------\n")
    }
}

let example = new Hero("","","");
let data = new Hero("Wukong", 25, "Monk");
let data1 = new Hero("Shen", 35, "Ninja");
let data2 = new Hero("Garen", 30, "Warrior");
let data3 = new Hero("Morgana", 100, "Mage");


example.attack()
data.attack()
data1.attack()
data2.attack()
data3.attack()