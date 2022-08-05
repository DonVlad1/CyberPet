import inquirer from 'inquirer';

const petFeedChoices = ["Steak","Vegetables","Fuel"];
const petSleepChoices = ["Play ball", "Fly",""];

let answerPetfoodFinal = ""

// let sleepChoices = [""]

// Feed | Sleep | Play | Drink | Special



/// Pet Dragon
inquirer.prompt([{
    name: "feedMe",
    type: "list",
    choices: petFeedChoices,
    message: "What do you want to feed your animal?"
    },
])
.then((answerPetFood) => {
    console.log("\nYou have chosen to feed your pet: " + answerPetFood.feedMe + "\n")
    answerPetfoodFinal = answerPetFood;

});


console.log("OUtside of inquirer prompt:" + answerPetfoodFinal)

/// Create an IF statement here. 
    /// IF selection = steak, +feed -drink 
    /// ELSEIF selection = vegetables -food -happiness -sleep
    /// ELSE sselection = fuel -food (significant) -unhappiness -happiness