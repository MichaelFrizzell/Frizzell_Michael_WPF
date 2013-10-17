// Michael Frizzell
// October 15th 2013
// Conditionals Worksheet

// Enough Gas?
// Is there enough gas to make it to the next gas station.

//var milesPerGallon = 20;
//var gasLeft = 20/100;
//var gasCapacity = 14;//gallons
//var distanceToTravel = 200;
//
//var currentGas = gasCapacity * gasLeft;
//var milesInTank = currentGas * milesPerGallon;
//
//if(distanceToTravel <= milesInTank){
//    console.log("You can make it");
//}else{
//    console.log("You must stop");
//}




//Check the Login?
//    “Welcome, (place their username here)!”  - if the username and password is correct
//“User not found. Try again.” -if the username does not match
//“Password does not match our records.”  -if the username matches but the password does not
//
//var userName = prompt("What is your Username?");
//console.log(userName);
//
//var userPassWord = prompt("Whats is you Password?");
//console.log(userPassWord);
//
//var correctUserName = "Michael";
//var correctPassWord = "joker";
//
//if(userName == correctUserName && userPassWord == correctPassWord){
//    console.log("Welcome, " + userName + "!");//username and password match.
//}else if(userName != correctUserName && userPassWord == correctPassWord){
//    console.log("User not found. Try again");//username does not match.
//}else{
//    console.log("Password does not match");
//}


//Movie Ticket Price?
//    “The ticket price is X”

var userAge = prompt("What is your age?");
console.log(userAge);

var timeOfDay = prompt("What time does your movie start");
console.log(timeOfDay);

var moviePrice = 12;
var discountPrice = 7;

if(userAge <= 10 || userAge >= 55){
    console.log("discountPrice");
}else if(timeOfDay <= 3 || timeOfDay >= 5){
    console.log("discountPrice");
}else{
    console.log("moviePrice");
}
























