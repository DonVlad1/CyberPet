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

}


export const Tank = new Animal("MyTank", 20, 20, 20, 20)
export const Mimic = new Animal("MyTank", 20, 20, 20, 20)
export const Dragon = new Animal("MyTank", 20, 20, 20, 20)


// export function test()
// {
//     console.log("test gud")
// }
