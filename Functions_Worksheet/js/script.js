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


var total = calcCircumference(radius);

function calcCircumference(radius){ //parameters, holds information
    var circumference = radius * 3.141592;
    return circumference;
}

console.log(total);




