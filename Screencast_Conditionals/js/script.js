// Conditional Logic _ Else If

var kidHeight = 50;
var minHeight = 48;
var wParentHeight = 45; //the height kid has to be with parent present


// if the child is old enough, print to the console "you can ride!"
// If the kid is over 48 inches in height
if(kidHeight > minHeight){
    // code performed if the condition is true
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present")
}else{
    //sorry you have some growing to do
    console.log("Sorry kid, you have got some growing to do first");
}


//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";