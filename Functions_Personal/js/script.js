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

var userCandy = prompt("How many peices of candy do you have?");
console.log(userCandy);

var kidsUnder3 = prompt("How many kids under 3 feet tall do you expect?");
console.log(kidsUnder3);

var kidsOver3 = prompt("How many kids over 3 feet tall do you expect?");
console.log(kidsOver3);

var totalCandyNeeded = candyNeeded(kidsUnder3, kidsOver3);

function candyNeeded(kidsUnder3, kidsOver3){
    var totalCandyNeeded = Number(kidsUnder3) + (Number(kidsOver3) * 2);
    return totalCandyNeeded;
}

console.log(totalCandyNeeded);

result = (userCandy >= totalCandyNeeded) ? "You have enough Candy" : "Better go get more candy" ;
console.log(result);