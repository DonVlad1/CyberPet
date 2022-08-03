import inquirer from 'inquirer';


import { Animal, testTank } from './modules/animalClass.js';



const getPetName = [
    {
        type: 'input',
        name: 'getName',
        message: "Name your pet:"
    }
]
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

// pet type unique abilities
let petAbilities = {
    cat: "boss", 
    dog: "fetch", 
    tank: "???", 
    dragon: "???", 
    mimic: "shapeshift"
}

// pet stats
let petStats = {
    hunger: testTank.hunger, 
    tired: testTank.thirst, 
    happy: testTank.tiredness, 
    clean: testTank.happiness
}

// calling inquiries
const petResponse = await inquirer.prompt(getPetType);
const nameResponse = await inquirer.prompt(getPetName);

// setting inputs to variables
let petName = nameResponse.getName;
let petType = petResponse.getPet; 

let petAbility = petAbilities[petType]; 

console.log(`Your chosen pet is ${petType}. Their name is ${petName}.`);
console.log(`${petName}'s special ability is: ${petAbility}.`);

// added stats (console.log and object)
console.log(`${petName}'s stats are:
Hunger: ${petStats.hunger} | Tired: ${petStats.tired} | Happy: ${petStats.happy} | Clean: ${petStats.clean}`)



// this function is what will be looping to play the game, I've currenly made it to loop around, we'll need If statements per action to alter stats.
// also need to figure out how to make the game stop when you exist game
async function playGame()
{
    const playMenu = await inquirer.prompt([
        {
            type: 'list',
            name: 'petActions',
            message: 'What would you like to do?',
            choices: ['Feed', 'Drink', 'Wash', 'Sleep','Exit Game']
        }

    ])
    if (playMenu.petActions === 'Exit Game') 
    {
        stopGame()
        return
    }
    else
    {
        
    }
    playGame()

}

function stopGame()
{
    console.log("Game has stopped")
}

playGame()











// if (petResponse.getPet == "tank") {
//     // console.log(testTank)
//     console.log(testTank.eat())
// }