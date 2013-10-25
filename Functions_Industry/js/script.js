//Michael Frizzell
//October 23, 2013
//Functions_Industry


//a diner has three new specials on the menu tonight
//they want the servers to push the three specials
//the management tells the servers if they can sell 20 or more of the three specials that night they will get 5% of all the specials they sell that nite
//If the server sells more than 40 they get an extra 20 dollars on top of the 5% bonus
// set up a function to determine if the server sold enough specials
//set up a conditional that tells the computer what to do if they did or did not sell enough of the specials
//tell the server how much there bonus is if they sold enough based on the specials being x amount of dollars



var steak = prompt("How many steak specials did you sell?");
console.log(steak);

var chicken = prompt("How many chicken specials did you sell?");
console.log(chicken);

var pork = prompt("How many pork specials did you sell?");
console.log(pork);

var totalSpecialsSold = specialsSold(steak, chicken, pork);

var specialPrice = prompt("What is the price of the specials?");
console.log(specialPrice);

function specialsSold(steak, chicken, pork){
    var totalSpecialsSold = Number(steak) + Number(chicken) + Number(pork);
    return totalSpecialsSold;
}

console.log(totalSpecialsSold);

var over40Bonus = totalSpecialsSold * specialPrice / 5 + 20;
console.log(over40Bonus);

var bonus20_40 = totalSpecialsSold * specialPrice / 5;
console.log(bonus20_40);

if(totalSpecialsSold >= 40){
    console.log("You have sold " + totalSpecialsSold + " specials, and are eligible for a $" + over40Bonus + "dollar bonus.");
}else if(totalSpecialsSold >= 20 && totalSpecialsSold < 40){
    console.log("You have sold " + totalSpecialsSold + " specials, and are eligible for a $" + bonus20_40 + " dollar bonus.");
}else{
    console.log("You have only sold " + totalSpecialsSold + " specials, you are not eligible for a bonus.");
}




