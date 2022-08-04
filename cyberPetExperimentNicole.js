import inquirer from 'inquirer';
import chalk from 'chalk'; 
import { Animal, statTank, statCat, statDog, statDragon, statMimic } from './modules/animalClass.js';



// inquirer for selecting what type of pet you have
async function petTypeInput() {
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

//inquirer for getting the pet name
async function petNameInput() {
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
    tank: "Run Them Down",
    dragon: "breatheIce",
    mimic: "shapeshift"
}

// sorting god mode 
let godMode = false; 
let petName = await petNameInput();
if (petName == "Gerald" || petName == "gerald") {
    console.log(chalk.red.bold("God Mode enabled.")); 
    godMode = true; 
}

// setting inputs to variables
let petType = await petTypeInput();
let petStats = ""
let petAbility = petAbilities[petType];
let endGame = false;




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
    console.log(petStats);
}

// getting pet type and pet info before beginning game
setPetType()
console.log(chalk.green(`Your chosen pet is ${petType}. Their name is ${petName}.`));
console.log(chalk.green(`${petName}'s special ability is: ${petAbility}.`));
console.log(chalk.green(`${petName}'s stats are: Hunger: ${petStats.hunger} | Tired: ${petStats.tiredness} | Happy: ${petStats.happiness} | Thirst: ${petStats.thirst}`));


// this function is what will be looping to play the game, I've currenly made it to loop around, we'll need If statements per action to alter stats.
async function playGame() {
    endGame = false; 

    if (godMode == true) {
        petStats.hunger += 1000;
        petStats.thirst += 1000;
        petStats.tiredness += 1000;
        petStats.happiness += 1000;
    }

    // interactable menu for players
    const playMenu = await inquirer.prompt([
        {
            type: 'list',
            name: 'petActions',
            message: 'What would you like to do?',
            choices: ['Feed', 'Sleep', 'Play', 'Drink', petAbility, 'Exit Game']
        }

    ]);

    // warning messages for when a stat reaches 20 or lower
    function checkLowStats() {
        if (petStats.hunger <= 20) {
            console.log(chalk.yellow(`${petName} is hungry!`));
        }
        else if (petStats.tiredness <= 20) {
            console.log(chalk.yellow(`${petName} is tired!`));
        }
        else if (petStats.happiness <= 20) {
            console.log(chalk.yellow(`${petName} is sad!`));
        }
        else if (petStats.thirst <= 20) {
            console.log(chalk.yellow(`${petName} is thirsty!`));
        }
    };

    // end game if stat reaches 0
    function checkGameOver() {
        if (petStats.hunger <= 0) {
            console.log(chalk.red.bold(`${petName} got too hungry, and has eaten you!`));
            console.log(`Game Over`)
            endGame = true;
        }
        else if (petStats.tiredness <= 0) {
            console.log(chalk.red.bold(`${petName} got too tired, and has ????`));
            console.log(`Game Over`)
            endGame = true;
        }
        else if (petStats.happiness <= 0) {
            console.log(chalk.red.bold(`${petName} got too sad, and has ????`));
            console.log(`Game Over`)
            endGame = true;
        }
        else if (petStats.thirst <= 0) {
            console.log(chalk.red.bold(`${petName} got too thirsty, and has spilled the blood of their enemies and drank it for sustenance.`));
            console.log(chalk.red.bold(`Unfortunately, that includes you.`));
            console.log(`Game Over`)
            endGame = true;
        }
    };

    // check player input for chosen option
    function checkPlayerInput() {
        switch (playMenu.petActions) {
            case "Feed":
                petStats = petStats.eat()
                break;

            case "Sleep":
                petStats = petStats.sleep();
                break;

            case "Play":
                petStats = petStats.play();
                break;

            case "Drink":
                petStats = petStats.drink();
                break;

            case petAbility:
                petStats = statTank.runThemDown()
                break;

            case "Exit Game":
                endGame = true;
                break;
        }
    }

    // run functions in order 
    checkPlayerInput();
    checkLowStats();
    checkGameOver();

    // check game state
    if (endGame == true) {
        console.log(chalk.green(`Hunger: ${petStats.hunger} | Tired: ${petStats.tiredness} | Happy: ${petStats.happiness} | Thirst: ${petStats.thirst}`));
        console.log("Thanks for playing!")
    }
    else {
        console.log(chalk.green(`Hunger: ${petStats.hunger} | Tired: ${petStats.tiredness} | Happy: ${petStats.happiness} | Thirst: ${petStats.thirst}`));
        playGame();
    }

};

playGame()