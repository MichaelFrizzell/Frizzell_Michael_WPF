// Frizzell Michael
// October 12th 2013
// Expressions_Personal

var userCigPerDay = prompt("How many cigarettes do you smoke a day?");
console.log(userCigPerDay);

userPacksPerYear = userCigPerDay * 365/20;
console.log(userPacksPerYear);

var userPricePerPack = prompt("How much does one pack of cigarettes cost you?");
console.log(userPricePerPack);

var userYearsSmoking = prompt("How many years have you smoked?");
console.log(userYearsSmoking);

var yearsCombinedCigsSmoked = userYearsSmoking * userPacksPerYear;

var pricePerYear = userPricePerPack * userPacksPerYear;

var priceAllTogether = userPricePerPack * userPacksPerYear * userYearsSmoking;

var result = ("You spend $" + pricePerYear + " dollars a year on cigarettes, \n and smoke " + userPacksPerYear + " packs per year. \n " +
    "That is " + yearsCombinedCigsSmoked + " packs smoked, and a total of $" + priceAllTogether + " dollars. \n QUIT NOW!");

alert (result);

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";