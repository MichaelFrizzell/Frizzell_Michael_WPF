//Michael Frizzell
//October 23, 2013
//Functions_Wacky

//If a driver drives x amount of miles
//and it takes them x amount of hours to get there
//how many miles did they drive per hour
//if over x amount of miles per hour tell user to slow down
//else drive faster

var milesDriven = prompt("How many miles did you drive?");
console.log(milesDriven);

var timeDriven = prompt("How many minutes did you drive?");
console.log(timeDriven);

var milesPerHour = function(milesDriven, timeDriven){
    var perHour = Number(milesDriven) / Number(timeDriven);
    return perHour;
}

var result = milesPerHour(milesDriven, timeDriven);
console.log(result);

var maxPerHour = 60;
console.log(maxPerHour);

if(milesPerHour >= maxPerHour){
    console.log("You have driven " + result + " miles.\nSLOW DOWN!");
}else{
    console.log("You have only driven " + result + " miles.\nSPEED UP!");
}


