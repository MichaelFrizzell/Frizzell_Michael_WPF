// Michael Frizzell
// October 13 2013
// Expressions_Industry

var userAvgMilesPer =  prompt("How many miles a gallon does your car get");
console.log(userAvgMilesPer);

var userMilesDriven1 = prompt("How many miles did you drive Week 1?");
console.log(userMilesDriven1);

var userMilesDriven2 = prompt("How many miles did you drive Week 2?");
console.log(userMilesDriven2);

var userMilesDriven3 = prompt("How many miles did you drive Week 3?");
console.log(userMilesDriven3);

var userMilesDriven4 = prompt("How many miles did you drive Week 4?");
console.log(userMilesDriven4);

var userPricePerGallon = prompt("How much is a gallon of gas locally?");
console.log(userPricePerGallon);

var totalMilesDriven = userMilesDriven1 + userMilesDriven2 + userMilesDriven3 + userMilesDriven4;
var gasTotal = (totalMilesDriven / userAvgMilesPer) * userPricePerGallon;
var result = "You drove a total of " + totalMilesDriven + " miles, and spent $" +  +" on gas."


//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";