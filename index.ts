#! /usr/bin/env node


import inquirer from "inquirer";

const solve = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnum"},
  {message: "enter second number", type: "number", name:"secondnum"},
  {

    message:"select one of the operator to perform operation",type: "list",name: "operator",
    choices: ["Addition","Subtraction",  "Multiplication","Division"]
  },
]);

if(solve.operator === "Addition"){
    console.log(solve.firstnum + solve.secondnum)
}else if (solve.operator === "Subtraction"){
    console.log(solve.firstnum - solve.secondnum)
}else if (solve.operator === "Multiplication"){
    console.log(solve.firstnum * solve.secondnum)
}else if (solve.operator === "Division"){
    console.log(solve.firstnum + solve.secondnum)
}else {
    console.log("please select valid operator")
}
