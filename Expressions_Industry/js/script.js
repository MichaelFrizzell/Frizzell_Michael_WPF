// Michael Frizzell
// October 13 2013
// Expressions_Industry

var userAvgMilesPer =  prompt("How many miles a gallon does your car get");
var userMilesDriven1 = prompt("How many miles did you drive Week 1?");
var userMilesDriven2 = prompt("How many miles did you drive Week 2?");
var userMilesDriven3 = prompt("How many miles did you drive Week 3?");
var userMilesDriven4 = prompt("How many miles did you drive Week 4?");
var userPricePerGallon = prompt("How much is a gallon of gas locally?");

var totalMilesDriven = userMilesDriven1 + userMilesDriven2 + userMilesDriven3 + userMilesDriven4;
var gasTotal = (totalMilesDriven / userAvgMilesPer) * userPricePerGallon;
var result = "You drove a total of " + totalMilesDriven + " miles, and spent $" +  +" on gas."


//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";