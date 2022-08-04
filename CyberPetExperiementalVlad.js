import inquirer from 'inquirer';
import { Animal, Tank } from './modules/animalClass.js';


async function petTypeInput()
{
    const getPetType = [
        {
            type: 'list',
            name: 'getPet',
            message: "Select a Pet:",
            choices: [
                "cat",
                "dog",
                "tank",
                "dragon",
                "mimic",
            ]
        }
    ]

    const petResponse = await inquirer.prompt(getPetType);
    console.log(petResponse.getPet)
    return petResponse.getPet
}

async function petNameInput()
{
    const getPetName = [
        {
            type: 'input',
            name: 'getName',
            message: "Name your pet:"
        }
    ]

    const nameResponse = await inquirer.prompt(getPetName);

    console.log(nameResponse)
    return nameResponse.getName

}
// inquirer for getting pet name


// inquirer for getting pet type


// object: unique pet abilities
let petAbilities = {
    cat: "boss", 
    dog: "fetch", 
    tank: "RunThemDown", 
    dragon: "???", 
    mimic: "shapeshift"
}

// calling inquiries



// setting inputs to variables
let petType = await petTypeInput()
let petName = await petNameInput() //nameResponse.getName;


// pet stats
// need to find a way to select pet stats depending on pet type
let petStats = {
    hunger: Tank.hunger, 
    tiredness: Tank.tiredness, 
    happiness: Tank.happiness, 
    thirst: Tank.thirst
}


let petAbility = petAbilities[petType]; 



console.log(`Your chosen pet is ${petType}. Their name is ${petName}.`);
console.log(`${petName}'s special ability is: ${petAbility}.`);
console.log(`${petName}'s stats are: Hunger: ${petStats.hunger} | Tired: ${petStats.tiredness} | Happy: ${petStats.happiness} | Thirst: ${petStats.thirst}`)



// this function is what will be looping to play the game, I've currenly made it to loop around, we'll need If statements per action to alter stats.
async function playGame()

{
    const playMenu = await inquirer.prompt([
        {
            
            type: 'list',
            name: 'petActions',
            message: 'What would you like to do?',
            choices: ['Feed', 'Sleep', 'Play', 'Drink', petAbility,'Exit Game']
        }

    ])

    if (playMenu.petActions === 'Feed') 
    {
        petStats = Tank.eat()
    }

    if (playMenu.petActions === 'Sleep') 
    {
        petStats = Tank.sleep()
    }

    if (playMenu.petActions === 'Play') 
    {
        petStats = Tank.play()
    }

    if (playMenu.petActions === 'Drink') 
    {
        petStats = Tank.drink()
    }

    if (playMenu.petActions === petAbility) 
    {
        petStats = Tank.runThemDown()
    }

    if (playMenu.petActions === 'Exit Game') 
    {
        stopGame()
        return
    }
    else
    {
        
    }

    console.log(`${petName}'s stats are: Hunger: ${petStats.hunger} | Tired: ${petStats.tiredness} | Happy: ${petStats.happiness} | Thirst: ${petStats.thirst}`)
    playGame()
    

}

function stopGame()
{
    console.log("Game has stopped")
}

playGame()