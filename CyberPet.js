import inquirer from 'inquirer';



class drinkDetails
{   constructor(drinkName, drinkPrice)
    {
        this.drinkName = drinkName
        this.drinkPrice = drinkPrice
    }
}


class customerDetails
{
    constructor(customerName, budgetTotal)
    {
        this.customerName = customerName
        this.budgetTotal = budgetTotal
    }
}


const drinkFanta = new drinkDetails("Fanta", 3.50)
const drinkPepsi = new drinkDetails("Pepsi", 7.00)
const drinkSprite = new drinkDetails("Sprite", 4.25)

const customerBilly = new customerDetails("Billy", 5)
const customerJohn = new customerDetails("John", 23)
const customerJane = new customerDetails("Jane", 80)


function runProgram()
{
    const drinkRange = [drinkFanta, drinkPepsi, drinkSprite]
    const customerRange = [customerBilly, customerJohn, customerJane]

    inquirer
    .prompt([
    {
        name: 'customerSelection',
        message: 'What is buying the drink?',
        type:'list',
        choices: ["Billy", "John", "Jane"]
    },

    {
        name: 'drinkSelection',
        message: 'What would you like to drink?',
        type:'list',
        choices: ["Fanta", "Pepsi", "Sprite"]
    }
    ])

    .then((answers) => {

    for (let customerIndex = 0; customerIndex < customerRange.length; customerIndex++) 
    {
        for (let drinkIndex = 0; drinkIndex < drinkRange.length; drinkIndex++) 
        {
            if ((answers.drinkSelection == drinkRange[drinkIndex].drinkName) && (answers.customerSelection == customerRange[customerIndex].customerName)) 
            {
                if (drinkRange[drinkIndex].drinkPrice > customerRange[customerIndex].budgetTotal) {
                    console.log(`Your order is ${answers.drinkSelection}, ${answers.customerSelection} can't afford £${drinkRange[drinkIndex].drinkPrice}`)
                    break
                }
                else
                {
                    console.log(`Your order is ${answers.drinkSelection}, ${answers.customerSelection} can afford £${drinkRange[drinkIndex].drinkPrice}`)
                    break
                }
            }
        }
    }

    })
    .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } 
    else
    {
      // Something else went wrong
    }
    });
}


runProgram()