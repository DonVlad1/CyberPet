export class Animal
{   constructor(name, hunger, thirst, tiredness, happiness)
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


export const statTank = new Animal("MyTank", 20, 20, 20, 20)
export const statMimic = new Animal("MyTank", 20, 20, 20, 20)
export const statDragon = new Animal("MyTank", 20, 20, 20, 20)
export const statCat = new Animal("MyTank", 20, 20, 20, 20)
export const statDog = new Animal("MyTank", 20, 20, 20, 20)


// export function test()
// {
//     console.log("test gud")
// }
