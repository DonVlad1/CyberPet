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

const petResponse = await inquirer.prompt(getPetType);
const nameResponse = await inquirer.prompt(getPetName);

let petName = nameResponse.getName;
let petType = petResponse.getPet; 
let petAbility = petAbilities[petType]; 

console.log(`Your chosen pet is ${petType}. Their name is ${petName}.`);
console.log(`${petName}'s special ability is: ${petAbility}.`);
console.log(Animal.petResponse)


if (petResponse.getPet == "tank") {
    // console.log(testTank)
    console.log(testTank.eat)
}