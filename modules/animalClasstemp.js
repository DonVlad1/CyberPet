function specialAbilityCheck(){
    if (setPetType = "dragon"){
        console.log("You have chosen to breathe ice!")
        this.happiness += 50
        this.hunger -= 30
        this.thirst -= 30
        this.tiredness -= 30

    } else if (setPetType = "cat"){
        console.log("Your cat bosses you around!")
        this.happiness += 20
        this.hunger += 20
        this.thirst += 10
        this.tiredness -= 50
    } else if (setPetType = "dog"){
        console.log("Your dog plays ball!")
        this.happiness += 50
        this.hunger -= 30
        this.thirst -= 30
        this.tiredness -= 30
    } else if (setPetType = "tank"){
        console.log("You have chosen to run them over!")
        this.happiness += 50
        this.hunger -= 20
        this.thirst -= 10
        this.tiredness -= 10
    } else if (setPetType = "mimic"){
        console.log("Your pet eats you, rejuevanting it!!" )
        this.happiness += 10
        this.hunger -= 20
        this.thirst -= 20
        this.tiredness += 40
    }
}