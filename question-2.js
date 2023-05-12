const num = Number(prompt("Enter a Number to convert to hours and minutes"));

//function to convert the number into hours and minutes
function timeConversion(num) {
    var hours = Math.floor(num);
    var minutes = Math.round((num - hours) * 60);
    console.log(`${hours} hours : ${minutes} minutes`);
}

//run the function
timeConversion(num);