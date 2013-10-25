//Michael Frizzell
//October 23, 2013
//Functions_Personal

//A ternary / if else shorthand / () ? true : if falseXXXX
//An else if
//An anonymous / function  var a = function(){console}
//A normal "named" function
//An expression with two arithmetic operators / >= / <= etc...
//A function with three parameters / function funcName(parameter){console} push with argument
//At least one logical operator / && / \\ / !!

//It is Halloween Night
//You have X peices of candy
//kids under 3feet tall get 1 peice
//kids over 3 feet get 2 peices
//if X amount of under3 feet kids come
//and X amount of over3 feet kids come
//Do you have to get more candy

var userCandy = prompt("How many peices of candy do you have?");
console.log(userCandy);

var kidsUnder3 = prompt("How many kids under 3 feet tall");
console.log(kidsUnder3);

var kidsOver3 = prompt("How many kids over 3 feet tall");
console.log(kidsOver3);

var totalNeeded = kidsUnder3 + kidsOver3 * 2;

result = (userCandy >= totalNeeded) ? "You have enough Candy" : "Better go get more candy" ;
console.log(result);