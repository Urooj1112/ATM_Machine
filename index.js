#! /usr/bin/env node
//ATM Machine Project
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 987650;
//Welcome Message
console.log("WELCOME IN HBL ATM");
// Take Pin Code As User Input
let PinAnswer = await inquirer.prompt([{
        message: "Enter your Pin Code",
        name: "pin",
        type: " number"
    }]);
//If Entered Code is Correct This Block Of Code Will Execute 
if (PinAnswer.pin == myPin) {
    console.log(" Login Successfully");
    let operationAns = await inquirer.prompt([{
            message: "Select Any One Operation ",
            name: "operation",
            type: "list",
            choices: ["Withdraw Amount", "Check Balance"] // This Is The List
        }]);
    if (operationAns.operation === "Withdraw Amount") { //If User Select Withdraw This Block Of Code Will Execte
        let AmountAns = await inquirer.prompt([{
                message: "Enter Your Amount", //Her User Enter Amount
                name: "amount",
                type: "number"
            }]);
        if (AmountAns.amount > myBalance) { // Compare User Balance And Entered Amount
            console.log("Insufficient Balance"); //If  Amount Is Greater Than Balance Then This Line Will Print
        }
        else { // If Balance is Equal to or Greater Than Amount Entered so This Code Will Run
            myBalance -= AmountAns.amount; // First Entered Amount Is Minus From The Balance
            console.log(`Current Amount is ${AmountAns.amount} Withdraw Successfully`);
            console.log(`Your Remaining Balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") // If User Select Check Balance Operation Then This Block Will Run
     {
        console.log(`Your Balance is %${myBalance}`);
    }
}
else //If User Enter A Wrong Pin Code Then This Condition will Execute
 {
    console.log("You Enter A Wrong Pin Code: TRY AGAIN ");
}
console.log("THANK YOU"); // At The End This Message Will Print
