// Conditional Logic _ Logical Operators

//var budget = 300;
//var iPhonePrice = 199.99;
//var payCheck = 200;
//
////If the price of the phone is less than our budget AND if our paycheck is over 300
//if(iPhonePrice < budget && payCheck > 300){
//    console.log("We can buy the phone");
//}else{
//    console.log("No phone for you!");
//}

var budget = 300;
var iPhonePrice = 199.99;
var wonLottery = true;

//If the price of the phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice < budget || wonLottery === true){
    console.log("We can buy the phone");
}else{
    console.log("No phone for you!");
}



//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";