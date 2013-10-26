//Michael Frizzell
//October 23, 2013
//Functions_Wacky

//If a driver drives x amount of miles
//and it takes them x amount of hours to get there
//how many miles did they drive per hour
//if over x amount of miles per hour tell user to slow down
//else drive faster

var milesDriven = prompt("How many miles did you drive?");//gets user information
console.log(milesDriven);//prints user info to console

var timeDriven = prompt("How many minutes did you drive?");//gets user information
console.log(timeDriven);//prints user info to console

var milesPerHour = function(milesDriven, timeDriven){//anonymous function that divides the milesDriven by timeDriven
    var perHour = Number(milesDriven) / Number(timeDriven);//function completed
    return perHour;//returns perHour variable to variable result
}

var result = milesPerHour(milesDriven, timeDriven);//puts function into variable
console.log(result);//prints result to console

var maxPerHour = 60;//sets variable for maximum hours per hour
console.log(maxPerHour);//prints maxPerHour to console

if(milesPerHour >= maxPerHour){//ifelse conditional statement,
    console.log("You have driven " + result + " miles.\nSLOW DOWN!");//if milesPerHour are greater or equal to maxPerHour
}else{
    console.log("You have only driven " + result + " miles.\nSPEED UP!");//else print this to console
}


