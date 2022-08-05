export class Animal
{   constructor(name, hunger, tiredness, happiness, thirst)
    {
        this.name = name
        this.hunger = hunger
        this.thirst = thirst
        this.tiredness = tiredness
        this.happiness = happiness
    }

    eat()
    {
        this.hunger += 30
        this.thirst -= 10
        this.tiredness -= 10
        return this
    }

    sleep()
    {
        this.tiredness += 50
        this.hunger -= 20
        this.thirst -= 20
        return this
    }

    drink()
    {
        this.thirst += 30
        return this
    }

    play()
    {
        this.happiness += 50
        this.hunger -= 20
        this.thirst -= 20
        this.tiredness -= 20
        return this
    }

    runThemDown() //temporarily here, needs to be move to subclass
    {
        this.happiness += 100
        this.tiredness -= 40
        return this
    }

}

// add subclasses here!
class Mimic extends Animal {
    constructor(name, hunger, tiredness, happiness, thirst)
    {
        super(name, hunger, tiredness, happiness, thirst);
    }
    
    specialAbility() {
        this.hunger += 100;
        this.tiredness -= 40;
        return this
    }
}


class Dragon extends Animal {
	constructor(name, hunger, tiredness, happiness, thirst) 
    {
		super(name, hunger, tiredness, happiness, thirst);
    }

	specialAbility() {
        this.happiness += 50
        this.hunger -= 30
        this.thirst -= 30
        this.tiredness -= 30
		return this;
	}
}

class Cat extends Animal {
	constructor(name, hunger, tiredness, happiness, thirst) 
    {
		super(name, hunger, tiredness, happiness, thirst);
    }

	specialAbility() {
        this.happiness += 20
        this.hunger += 20
        this.thirst += 10
        this.tiredness -= 50
		return this;
	}
}

class Dog extends Animal {
	constructor(name, hunger, tiredness, happiness, thirst) 
    {
		super(name, hunger, tiredness, happiness, thirst);
    }

	specialAbility() {
        this.happiness += 50
        this.hunger -= 30
        this.thirst -= 30
        this.tiredness -= 30
		return this;
	}
}

class Tank extends Animal {
	constructor(name, hunger, tiredness, happiness, thirst) 
    {
		super(name, hunger, tiredness, happiness, thirst);
    }

	specialAbility() {
        this.happiness += 50
        this.hunger -= 20
        this.thirst -= 10
        this.tiredness -= 10
	}
}


export const statTank = new Animal("myTank", 150, 130, 90, 160)
export const statMimic = new Mimic("myMimic", 120, 150, 160, 120)
export const statDragon = new Animal("myDragon", 200, 100, 80, 90)
export const statCat = new Animal("myCat", 160, 120, 120, 50)
export const statDog = new Animal("myDog", 140, 120, 80, 100)


export const petList = [statCat, statDog, statTank, statDragon, statMimic]

// export function test()
// {
//     console.log("test gud")
// }
