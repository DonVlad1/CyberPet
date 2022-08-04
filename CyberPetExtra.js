import inquirer from 'inquirer';
import { Animal, statTank, statCat, statDog, statDragon, statMimic } from './modules/animalClass.js';


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

// setting inputs to variables
let petName = await petNameInput();
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
console.log(`Your chosen pet is ${petType}. Their name is ${petName}.`);
console.log(`${petName}'s special ability is: ${petAbility}.`);
console.log(`${petName}'s stats are: Hunger: ${petStats.hunger} | Tired: ${petStats.tiredness} | Happy: ${petStats.happiness} | Thirst: ${petStats.thirst}`);


// this function is what will be looping to play the game, I've currenly made it to loop around, we'll need If statements per action to alter stats.
async function playGame() {
    endGame = false; 
    
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
            console.log(`${petName} is hungry!`);
        } 
        else if (petStats.tiredness <= 20) 
        {
            console.log(`${petName} is tired!`);
        } 
        else if (petStats.happiness <= 20) 
        {
            console.log(`${petName} is sad!`);
        } 
        else if (petStats.thirst <= 20) 
        {
            console.log(`${petName} is thirsty!`);
        }
    }; 

    // end game if stat reaches 0
    function checkGameOver() {
        //console.log(`${petName}'s stats are: Hunger: ${petStats.hunger} | Tired: ${petStats.tiredness} | Happy: ${petStats.happiness} | Thirst: ${petStats.thirst}`);
        // if (petStats.hunger <= 0) 
        // {
        //     console.log(`${petName} got too hungry, and has eaten you!`)
        //     console.log(`Game Over`)
        //     endGame = true;
        // } 
        // else if (petStats.tiredness <= 0) 
        // {
        //     console.log(`${petName} got too tired, and has ????`)
        //     console.log(`Game Over`)
        //     endGame = true;
        // } 
        // else if (petStats.happiness <= 0) 
        // {
        //     console.log(`${petName} got too sad, and has ????`)
        //     console.log(`Game Over`)
        //     endGame = true;
        // } 
        // else if (petStats.thirst <= 0) 
        // {
        //     console.log(`${petName} got too thirsty, and has ????`)
        //     console.log(`Game Over`)
        //     endGame = true;
        // }

        for (let petListIndex = 0; petListIndex < Object.keys(petStats).length; petListIndex++) 
        {
            if (Object.values(petStats)[petListIndex] <= 0) {
                console.log(`${petName} got too ${Object.keys(petStats)[petListIndex]}, and has eaten you!`)
                petListIndex = Object.keys(petStats).length
                endGame = true
            }
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
        console.log(`${petName}'s stats are: Hunger: ${petStats.hunger} | Tired: ${petStats.tiredness} | Happy: ${petStats.happiness} | Thirst: ${petStats.thirst}`);
        console.log("Thanks for playing!")
    } 
    else 
    {
        console.log(`${petName}'s stats are: Hunger: ${petStats.hunger} | Tired: ${petStats.tiredness} | Happy: ${petStats.happiness} | Thirst: ${petStats.thirst}`);
        playGame();
    }

};

playGame()