import chalk from "chalk";

//create empty variable for list
let todoList: string[] = [];

function current_date():void{
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; 
    const day = currentDate.getDate();
    console.log(chalk.bgGray(`Todo-List Dated: ${day}-${month}-${year}`))
};

// Create function to show list with index
function result(): void {
    for (let i = 0; i < todoList.length; i++) {
      console.log(i + 1 + ": " + todoList[i]);
    }
  };

export {todoList, current_date, result}