// Michael Frizzell
// October 16th 2013
// Conditionals_Personal




//If I am having a party with X amount of people
//I figure everyone will eat either x hot dogs or x hamburgers or a mix of the two
//so i need x * the amount of people worth of hamburgers and hot dogs
//I have x hot dogs and x hamburgers
//everyone will also need two sodas
//I have x amount of sodas
//Will I need to go to the store for more food or sodas?
//TRIP TO STORE?

var amountOfPeople = prompt("How many people are coming to your party?");
console.log(amountOfPeople);

var numberOfHotDogs = prompt("How many hot dogs do you have?");
console.log(numberOfHotDogs);

var numberOfBurgers = prompt("How many burgers do you have?");
console.log(numberOfBurgers);

var totalFood = numberOfBurgers + numberOfHotDogs;

var numberOfSodas = prompt("How many soda's do you have?");
console.log(numberOfSodas);

var foodPerPerson = prompt("How many hamburgers or hot dogs will each person eat?");
console.log(foodPerPerson);

var sodaPerPerson = prompt("How many soda's will each person drink?")

if(amountOfPeople * foodPerPerson >= totalFood || amountOfPeople * sodaPerPerson >= numberOfSodas){
    console.log("You do not have enough burgers, hot dogs and soda's.\nBetter go to the store!");
}else{
    console.log("You have enough burgers, no need to go to the store");
}
