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
        this.thirst -= 10
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


export const statTank = new Animal("myTank", 10, 30, 50, 60)
export const statMimic = new Animal("myMimic", 20, 150, 60, 20)
export const statDragon = new Animal("myDragon", 233, 72, 81, 96)
export const statCat = new Animal("myCat", 68, 24, 124, 34)
export const statDog = new Animal("myDog", 43, 24, 83, 92)


// export function test()
// {
//     console.log("test gud")
// }
