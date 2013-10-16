// Conditional Logic _ Ternaries

//var gpa = 48;

////if the gpa is over the min 2.0 score, the student can graduate
//if(gpa > 2.0){
//    console.log("You can graduate!");
//}else{
//    console.log("GPA is too low!");
//}

//(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");

var age = 11;
var book;

//if the child is under 10 they get green eggs and ham, other wise they get the time machine
//if(age < 10){
//    book = "Green Eggs and Ham";
//}else{
//    book = "The Time Machine";
//}
//console.log(book);

//Ternary
book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine"
console.log(book);

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";