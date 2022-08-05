// You need to install inquirer usin npm install inquirer
import inquirer from 'inquirer';

// object holding menu contents
let menu = {
    coffee: 3,
    tea: 2.5,
    latte: 2,
    coke: 1.5, 
    water: 1,
    crisps: 0.5,
    scone: 2.5,
    brownie: 2.5,
    sandwhich: 3,
}

// the CoffeeShop class that will store a customers name, order, and total cost
class CoffeeShop {
    constructor(name){
        this.name = name
        this.order = []
        this.total = 0
    }
    // this method loops through the order array and adds the price thats stored in the menu object for each item in the array
    calculateTotal() {
        this.total = 0
        for(let i = 0; i < this.order.length; i++){
            this.total += menu[this.order[i]]
        }
        return this.total
    }
    // this setter adds an item to the order array
    set updateOrder(newItem){
        this.order.push(newItem)
    }
}

// list of questions to ask user before setting up instance of CoffeeShop class
const questions = [
    {
        type: 'input',
        name: 'getName',
        message: "What's your name?"
    }
]

// use inquirer to prompt the questions in the questions array in the terminal
const response = await inquirer.prompt(questions)
// create instance of CoffeeShop class passing the name typed in the terminal
let customer = new CoffeeShop(response.getName)

// function to run when the order has been made
const checkOut = async () => {
    console.log(`
        You ordered:
        ${customer.order.join(', ')}
        Total:
        £${customer.calculateTotal().toFixed(2)}
    `)

    // asks user to pay in terminal, checks to see if they typed a number or if they can afford the order
    const pay = await inquirer.prompt([{
        type: 'input',
        name: 'totalMoney',
        message: 'Please pay here',
        validate(value){
            if(isNaN(value)){
                return 'Please enter a number'
            } else if(customer.total > parseInt(value)) {
                return "You don't have enough money"
            } else {
                return true
            }
        }
    }])
    // console logs the receipt
    console.log(`
        Thank you ${customer.name}
        Order:     ${customer.order.join(', ')}
        Total:     £${customer.calculateTotal().toFixed(2)}
        You Paid:  £${parseInt(pay.totalMoney).toFixed(2)}
        Change:    £${(pay.totalMoney - customer.calculateTotal()).toFixed(2)}
    `)
}

// asks user what they want to order
const askForOrder = async () => {
    // the choices store an array with all the keys in the menu object plus another valu '- Go To Checkout -'
    const order = await inquirer.prompt([
        {
            type: 'list',
            name: 'getOrder',
            message: 'What would you like to order?',
            choices: [...Object.keys(menu), '- Go To Checkout -']
        }
    ])
    // check to see if they select '- Go To Checkout -' if see run checkOut function and exit the askForOrder function. if not run the setter for the selected item
    if(order.getOrder === '- Go To Checkout -'){
        checkOut()
        return;
    } else {
        customer.updateOrder = order.getOrder
    }
    // call function again until '- Go To Checkout -' is selected by the user
    askForOrder()
}
askForOrder()