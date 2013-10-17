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

//Check the Login
//
//Make sure the user has the correct username and password. If the username doesn’t match then a specific
//message for that should be printed to the console. If the password doesn’t match a message should appear
//for that, etc. Only one error message should appear.
//    Given:
//Username entered by user
//Password entered by user
//Correct username
//Correct password
//Result To Print Out:
//    “Welcome, (place their username here)!”  - if the username and password is correct
//“User not found. Try again.” -if the username does not match
//“Password does not match our records.”  -if the username matches but the password does not

var userName = prompt("What is your Username?");
console.log(userName);

var userPassWord = prompt("Whats is you Password?");
console.log(userPassWord);

var correctUserName = "Michael";
var correctPassWord = "joker";

if(userName == correctUserName && userPassWord == correctPassWord){
    console.log("Welcome, " + userName + "!");//username and password match.
}else if(userName != correctUserName && userPassWord == correctPassWord){
    console.log("User not found. Try again");//username does not match.
}else{
    console.log("Password does not match");
}