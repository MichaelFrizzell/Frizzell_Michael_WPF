//Michael Frizzell
//October 23, 2013
//Functions_Personal

//It is Halloween Night
//You have X peices of candy
//kids under 3feet tall get 1 peice
//kids over 3 feet get 2 peices
//if X amount of under3 feet kids come
//and X amount of over3 feet kids come
//Do you have to get more candy

var userCandy = prompt("How many peices of candy do you have?");//collects user info
console.log(userCandy);//prints user info

var kidsUnder3 = prompt("How many kids under 3 feet tall do you expect?");//collects user info
console.log(kidsUnder3);//prints user info

var kidsOver3 = prompt("How many kids over 3 feet tall do you expect?");//collects user info
console.log(kidsOver3);//prints user info

var totalCandyNeeded = candyNeeded(kidsUnder3, kidsOver3);//sets variable and parameters for function

function candyNeeded(kidsUnder3, kidsOver3){//starts function, arguments
    var totalCandyNeeded = Number(kidsUnder3) + (Number(kidsOver3) * 2);//performs function
    return totalCandyNeeded;//returns variable to totalCandyNeeded
}

console.log(totalCandyNeeded);//prints function return

result = (userCandy >= totalCandyNeeded) ? "You have enough Candy" : "Better go get more candy" ;//sets result variable
console.log(result);prints result variable