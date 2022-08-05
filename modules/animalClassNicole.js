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
        this.hunger += 60
        this.thirst -= 20
        return this
    }

    sleep()
    {
        this.tiredness += 80
        this.hunger -= 40
        this.thirst -= 40
        return this
    }

    drink()
    {
        this.thirst += 60
        this.hunger -= 10
        return this
    }

    play()
    {
        this.happiness += 30
        this.hunger -= 30
        this.thirst -= 30
        this.tiredness -= 30
        return this
    }

    runThemDown() //temporarily here, needs to be move to subclass
    {
        this.happiness += 100
        this.tiredness -= 50
        return this
    }

}

class Mimic extends Animal {
    constructor(name, hunger, tiredness, happiness, thirst)
    {
        super(name, hunger, tiredness, happiness, thirst);
    }
    
    specialAbility() {
        this.hunger += 100;
        this.tiredness -= 50;
        return this
    }
}

class Dragon extends Animal
{
    constructor(name, hunger, tiredness, happiness, thirst)
    {
        super(name, hunger, tiredness, happiness, thirst)
    }

    specialAbility()
    {
        this.hunger += 100;
        this.tiredness -= 50;
        return this
    }
}


export const statTank = new Animal("myTank", 110, 130, 150, 160)
export const statMimic = new Mimic("myMimic", 120, 150, 160, 120)
export const statDragon = new Dragon("myDragon", 233, 72, 81, 96)
export const statCat = new Animal("myCat", 68, 124, 124, 34)
export const statDog = new Animal("myDog", 143, 124, 83, 92)

export const petList = [statTank, statMimic, statDragon, statCat, statDog]