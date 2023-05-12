//User to input an angle to find out which kind it is
const angle = Number(prompt("Enter an angle:"));

//using if statement to determine what kind of angle it is
    if ((angle >= 0) && (angle < 90)){
        console.log("This is an Acute Angle which is An angle between 0 and 90");
    }
    else if(angle === 90){
        console.log("This is a Right Angle which is A 90 degree angle");
    }
    else if((angle > 90) && (angle < 180)){
        console.log("This is an Obtuse Angle which is An angle between 90 and 180 degrees");
    }
    else if(angle === 180){
        console.log("This is a Straight Angle which is A 180 degree angle");
    }
    else{
        console.log("Not an Angle between 0 and 180");
    }
        
        
