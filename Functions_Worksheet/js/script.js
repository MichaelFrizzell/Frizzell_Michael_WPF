// Michael Frizzell
// October 23, 2013
// Functions_Worksheet

//CIRCUMFERENCE
//Calculate the circumference of a circle
//pi = 3.141592
//radius = diameter/2
//circumference = pi * radius

var diameter = prompt("What is the diameter of the circle?");
console.log(diameter);

var radius = diameter / 2;

var circleTotal = calcCircumference(radius);

function calcCircumference(radius){
    var circumference = radius * 3.141592;
    return circumference;
}

var result = ("The circumference of the circle is " + circleTotal);
console.log(result);



//Stung!
//It takes 8.666666667 bee stings per pound to kill an animal.
//Calculate how many bee stings are needed to kill an animal in a function
//“It takes X bee stings to kill this animal."

var animalWeight = prompt("How much does the animal weigh?");
console.log(animalWeight);

var stingsPerPound = 8.666666667;

var total = stingsNeeded(animalWeight, stingsPerPound);

function stingsNeeded(w, spp){
    var needed = w * spp;
    return needed;
}

var result2 = ("It takes " + total + " bee stings to kill this animal.");
console.log(result2);






















