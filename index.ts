#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import {todoList, current_date, result} from "./result_Date.js";

console.log(chalk.bgCyan("Make Your ToDo List"))
// while true ask question to make a list
while (true) {
    // first question to make a list
  let newList = await inquirer.prompt([
    {
      message: "Add todo list: ",
      name: "newlist",
      type: "input",
    },
    // Second question to to add more data in list?
    {
      message: "Do you want to add more?",
      name: "more",
      type: "confirm",
    }
  ]);
//   push user input into empty list variable 
todoList.push(newList.newlist);
//   Show result every time with index whenever user input in list
  result();
//   check if the user select no from second question break the loop 
  if (newList.more === false) {
    break;
  }
}

// after first loop break ask another question to confirm there list? 
let confirmation = await inquirer.prompt({
  message: "Do you want to confirm list?",
  name: "confirmation",
  type: "confirm",
});
// check if the user select yes 
if (confirmation.confirmation === true) {
    current_date()
    result();
}
// check if the user select no 
else if (confirmation.confirmation === false) {
    // if the user select no ask new question to add or del items from list
  let modifyList = await inquirer.prompt({
    message: "Do you want to modify your list? Add or Del",
    name: "modify",
    type: "list",
    choices: ["Add", "Del"],
  });
//   created another while loop if user select Add option to add more in items in list
  while (modifyList.modify === "Add") {
    // created another question to add item
    let addItem = await inquirer.prompt([
      {
        message: "Add Item: ",
        name: "additem",
        type: "input",
      },
    //   when user input in add item ask again to add more? if user select yes question repeated again
      {
        message: "Do you want to add more?",
        name: "more",
        type: "confirm",
      },
    ]);
    // again push additem input in list
    todoList.push(addItem.additem);
    // if user select no break the loop and show the final result with index
    if (addItem.more === false) {
        current_date()
        result();
      break;
    }
  }
while(modifyList.modify === "Del"){
    const delItem = await inquirer.prompt([{
        message: "Please Enter Index Number to Delete Item",
        name: "delitem",
        type:"number"
    },
    {
        message:"Do you want to delete more items?",
        name: "delmore",
        type: "confirm"
    }
]);
    if(delItem.delmore===true){
    todoList.splice(delItem.delitem-1, 1)
    current_date()
    result()
    }
    if(delItem.delmore === false){
    todoList.splice(delItem.delitem-1, 1)
    current_date()
    result()
    break;
}
  }
}
