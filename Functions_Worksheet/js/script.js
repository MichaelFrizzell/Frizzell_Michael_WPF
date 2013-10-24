// Michael Frizzell
// October 23, 2013
// Functions_Worksheet

//CIRCUMFERENCE
//Calculate the circumference of a circle
//pi = 3.141592
//radius = diameter/2
//circumference = pi * radius

var diameter = prompt("What is the diameter of the circle?");//prompts user asks size of circle
console.log(diameter);//prints to console size of circle

var radius = diameter / 2;//sets variable for radius by dividing the diameter by 2

var circleTotal = calcCircumference(radius);//sets variable for the circumference which is performed in the function below

function calcCircumference(radius){//begin function
    var circumference = radius * 3.141592;//radius * pi for circumference
    return circumference;//returns the value of circumference to variable circleTotal
}

var result = ("The circumference of the circle is " + circleTotal);//sets results
console.log(result);//prints results to console



//Stung!
//It takes 8.666666667 bee stings per pound to kill an animal.
//Calculate how many bee stings are needed to kill an animal in a function
//“It takes X bee stings to kill this animal."

var animalWeight = prompt("How much does the animal weigh?");//Asks user for animal weight
console.log(animalWeight);prints to console animal weight

var stingsPerPound = 8.666666667;

var total = stingsNeeded(animalWeight, stingsPerPound);

function stingsNeeded(w, spp){
    var needed = w * spp;
    return needed;
}

var result2 = ("It takes " + total + " bee stings to kill this animal.");
console.log(result2);






















