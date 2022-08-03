class Animal
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
    }

    sleep()
    {
        this.tiredness += 80
        this.hunger -= 40
        this.thirst -= 40
    }

    drink()
    {
        this.thirst += 60
    }

    play()
    {
        this.happiness += 30
        this.hunger -= 30
        this.thirst -= 30
        this.tiredness -= 30
    }
}