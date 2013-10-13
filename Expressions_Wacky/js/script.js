// Michael Frizzell
// October 13 2013
// Expressions_Wacky

var userZombiesKilledPerWeek = prompt("How many zombies do you kill on average every Week?");
console.log(userZombiesKilledPerWeek);

var userNumberOfWeeks = prompt("How many Weeks has it been since your Zombie Apocalypse started?");
console.log(userNumberOfWeeks);

var totalZombiesKilled = userZombiesKilledPerWeek * userNumberOfWeeks;
var numberOfYears = userNumberOfWeeks / 52;
var numberOfZombies = 7000000000;
var zombiesLeft = numberOfZombies - totalZombiesKilled;
var result = "It has been " + numberOfYears  + " years since your Apocalypse started. \nYou have killed " + totalZombiesKilled + " zombies. \nThere are still " + zombiesLeft + " zombies left.";
alert(result);

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";