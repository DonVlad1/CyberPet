import inquirer from 'inquirer';


import { Animal, statTank, statCat, statDog, statDragon, statMimic } from './modules/animalClass.js';


// inquirer for getting pet name
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
    return nameResponse.getName

}

// object: unique pet abilities
let petAbilities = {
    cat: "boss", 
    dog: "fetch", 
    tank: "RunThemDown", 
    dragon: "???", 
    mimic: "shapeshift"
}

// setting inputs to variables
let petName = await petNameInput();
let petType = await petTypeInput(); 
let petStats = ""
// Setting petStats = stats of chosen pet
function setPetType() {
    if (petType == "tank") {
        petStats = statTank; 
        return
    } else if (petType == "cat") {
        petStats = statCat;
        return
    } else if (petType == "dog") {
        petStats = statDog;
        return
    } else if (petType == "dragon") {
        petStats = statDragon;
        return
    } else if (petType == "mimic") {
        petStats = statMimic;
        return
    }
    console.log(petStats)
}
// set pet stats
petStats = [setPetType()]

let petAbility = petAbilities[petType]; 

console.log(`Your chosen pet is ${petType}. Their name is ${petName}.`);
console.log(`${petName}'s special ability is: ${petAbility}.`);

// // added stats (console.log and object)
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
        petStats = statTank.eat()
    }

    if (playMenu.petActions === 'Sleep') 
    {
        petStats = statTank.sleep()
    }

    if (playMenu.petActions === 'Play') 
    {
        petStats = statTank.play()
    }

    if (playMenu.petActions === 'Drink') 
    {
        petStats = statTank.drink()
    }

    if (playMenu.petActions === petAbility) 
    {
        petStats = statTank.runThemDown()
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