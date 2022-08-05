import inquirer from 'inquirer';
import { Animal, petList, statTank, statCat, statDog, statDragon, statMimic } from './modules/animalClass.js';
import chalk from 'chalk'; 


// inquirer for selecting what type of pet you have
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

//inquirer for getting the pet name
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
    return nameResponse.getName; 

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
let petNameAns = await petNameInput();
if (petNameAns == "Gerald" || petNameAns == "gerald") {
    console.log(chalk.red.bold("God Mode enabled.")); 
    godMode = true; 
}
let petName = chalk.yellow(petNameAns);

// setting inputs to variables
let petType = await petTypeInput();
let petStats = ""
let petAbility = petAbilities[petType]; 
let endGame = false; 

// Setting petStats = stats of chosen pet
function setPetType() {

    let petChoices = ["cat", "dog", "tank", "dragon", "mimic"]

    for (let petListIndex = 0; petListIndex < petChoices.length; petListIndex++) 
    {
        if (petType == petChoices[petListIndex])
        {
            petStats = petList[petListIndex];
            petListIndex = 5
            return
        }
    }
}



// getting pet type and pet info before beginning game
setPetType()
console.log(`Your chosen pet is ${petType}. Their name is ${petName}.`);
console.log(`${petName}'s special ability is: ${petAbility}.`);
console.log(chalk.green.bold(`${petName}'s stats are: Hunger: ${petStats.hunger} | Tired: ${petStats.tiredness} | Happy: ${petStats.happiness} | Thirst: ${petStats.thirst}`));


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
        if (petStats.hunger <= 20) 
        {
            console.log(chalk.red.bold(`${petName} is hungry!`));
        } 
        else if (petStats.tiredness <= 20) 
        {
            console.log(chalk.red.bold(`${petName} is tired!`));
        } 
        else if (petStats.happiness <= 20) 
        {
            console.log(chalk.red.bold(`${petName} is sad!`));
        } 
        else if (petStats.thirst <= 20) 
        {
            console.log(chalk.red.bold(`${petName} is thirsty!`));
        }
    }; 

    // end game if stat reaches 0
    function checkGameOver() {
        //console.log(`${petName}'s stats are: Hunger: ${petStats.hunger} | Tired: ${petStats.tiredness} | Happy: ${petStats.happiness} | Thirst: ${petStats.thirst}`);
        if (petStats.hunger <= 0) 
        {
            console.log(chalk.red(`${petName} got too hungry, and has eaten you!`)); 
            console.log(chalk.red.bold(`Game Over`));
            endGame = true;
        } 
        else if (petStats.tiredness <= 0) 
        {
            console.log(chalk.red(`${petName} got too tired, and has gone to bed.`));
            console.log(chalk.red.bold(`Game Over`));
            endGame = true;
        } 
        else if (petStats.happiness <= 0) 
        {
            console.log(chalk.red(`${petName} got too sad, and has left you to find happiness in the wild.`));
            console.log(chalk.red.bold(`Game Over`));
            endGame = true;
        } 
        else if (petStats.thirst <= 0) 
        {
            console.log(chalk.red(`${petName} got too thirsty, and has spilled the blood of their enemies to drink for sustenance.`));
            console.log(chalk.red(`Unfortunately, that includes you.`));
            console.log(chalk.red.bold(`Game Over`));
            endGame = true;
        }
    };

    function checkPlayerInput() 
    {
        switch (playMenu.petActions) 
        {
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

    // run function to check player input
    checkPlayerInput();
    checkLowStats(); 
    checkGameOver(); 
    if (endGame == true) 
    {
        console.log(chalk.green.bold(`Hunger: ${petStats.hunger} | Tired: ${petStats.tiredness} | Happy: ${petStats.happiness} | Thirst: ${petStats.thirst}`));
        console.log("Thanks for playing!")
    } 
    else 
    {
        console.log(chalk.green.bold(`Hunger: ${petStats.hunger} | Tired: ${petStats.tiredness} | Happy: ${petStats.happiness} | Thirst: ${petStats.thirst}`));
        playGame();
    }

};

playGame()