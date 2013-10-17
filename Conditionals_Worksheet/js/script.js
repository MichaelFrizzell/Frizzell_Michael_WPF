// Michael Frizzell
// October 15th 2013
// Conditionals Worksheet

// Enough Gas?
// Is there enough gas to make it to the next gas station.

var milesPerGallon = 20;
var gasLeft = 20/100;
var gasCapacity = 14;//gallons
var distanceToTravel = 200;

var currentGas = gasCapacity * gasLeft;
var milesInTank = currentGas * milesPerGallon;

if(distanceToTravel <= milesInTank){
    console.log("You can make it");
}else{
    console.log("You must stop");
}