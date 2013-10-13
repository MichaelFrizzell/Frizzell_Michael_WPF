// Frizzell Michael
// October 12th 2013
// Expressions_Personal

var userCigPerDay = prompt("How many cigarettes do you smoke a day?");
console.log(userCigPerDay);
userPacksPerYear = userCigPerDay * 365/20;
console.log(userPacksPerYear);
var userPricePerPack = prompt("How much does one pack of cigarettes cost you?");
console.log(userPricePerPack);
var pricePerYear = userPricePerPack * userPacksPerYear;
var result = pricePerYear;
alert ("You spend $" + result + " dollars a year on cigarettes, \n and smoke " + userPacksPerYear + " packs per year. \n QUIT NOW!");

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";