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



var steak = prompt("How many steak specials did you sell?");//gets user info
console.log(steak);//prints user info

var chicken = prompt("How many chicken specials did you sell?");//gets user info
console.log(chicken);//prints user info

var pork = prompt("How many pork specials did you sell?");//gets user info
console.log(pork);//prints user info

var totalSpecialsSold = specialsSold(steak, chicken, pork);//sets variable for totalSpecialsSold and sets parameters for function

var specialPrice = prompt("What is the price of the specials?");//gets user info
console.log(specialPrice);//prints user info

function specialsSold(steak, chicken, pork){//function arguments
    var totalSpecialsSold = Number(steak) + Number(chicken) + Number(pork);//performs function
    return totalSpecialsSold;//returns to totalSpecialsSold
}

console.log(totalSpecialsSold);//prints to console totalSpecialsSold

var over40Bonus = totalSpecialsSold * specialPrice / 5 + 20;//sets the bonus for over 40 sales
console.log(over40Bonus);//prints to console

var bonus20_40 = totalSpecialsSold * specialPrice / 5;//sets the bonus for between 20 and 39
console.log(bonus20_40);//prints to console

if(totalSpecialsSold >= 40){//elseif statement
    console.log("You have sold " + totalSpecialsSold + " specials, and are eligible for a $" + over40Bonus + "dollar bonus.");
}else if(totalSpecialsSold >= 20 && totalSpecialsSold < 40){
    console.log("You have sold " + totalSpecialsSold + " specials, and are eligible for a $" + bonus20_40 + " dollar bonus.");
}else{
    console.log("You have only sold " + totalSpecialsSold + " specials, you are not eligible for a bonus.");
}




