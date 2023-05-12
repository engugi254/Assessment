//Program to check from 2 integers one of them is 8 or sum or difference is 8

//Prompt to enter the two values
let x = parseInt(prompt("Enter first Number"));
let y = parseInt(prompt("Enter second Number"));

//Check if one of them is equal to 8
function checkValue(x,y){
    if((x === 8) || (y === 8)){
        console.log("One of them is 8");
    }
    else{
        console.log("None of them is 8");
    }
}

//Check if their sum is 8
function checkSum(x,y){
    if((x+y) === 8){
        console.log("Their sum is 8");
    }
    else{
        console.log("Their sum is not equals to 8");
    }
}

//Check if their difference is 8
function checkDiff(x,y){
    if((x-y) === 8 || (y-x) === 8){
        console.log("Their difference is 8");
    }
    else{
        console.log("Their difference is not equals to 8");
    }
}

//Run the functions
checkValue(x,y);
checkSum(x,y);
checkDiff(x,y);
