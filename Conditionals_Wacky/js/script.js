// Michael Frizzell
// October 16th 2013
// Conditionals_Personal

//Most students and tandem skydives open their parachutes at 5000 feet +
//Licensed and more experienced jumpers with a normal parachute open usually around 3500 feet. +
//The type of parachute you are flying have a great influence on opening altitude. +
//Licensed experienced jumpers with a high performance parachute open usually around 2500 feet. +

//Determine at what altitude a jumper has to open there parachute by depending on there skill level and parachute type.

var userSkillLevel = prompt("Are you a tandem diver or skilled diver?");//Asks user if they are a tandem or skilled diver.
console.log("userSkillLevel");//Prints out to console users response.

var userChuteType = prompt("Is your parachute a regular or high performance parachute.");//Asks user what type of chute they are using.
console.log("userChuteType");//Prints out to console users response.

var skilledDiver = "skilled";//var set with string
var tandemDiver = "tandem";//var set with string
var regularChute = "regular";//var set with string
var highPerformanceChute = "high performance";//var set with string

if(userSkillLevel === skilledDiver && userChuteType === highPerformanceChute){//if user is skilled and has a high performance chute pull cord at 2500 feet
    console.log("You are a " + skilledDiver + " diver using a " + highPerformanceChute + " parachute.\nPull the cord by 2500 feet.");//tell user his skill and chute type and tell him when to pull cord
}else if(userSkillLevel === skilledDiver && userChuteType != highPerformanceChute){//if not and users skill level is skilled and has a regular chute pull cord at 3500 feet
    console.log("You are a " + skilledDiver + " diver and using a " + regularChute + " parachute.\nPull the cord at 3500 feet");//tell user his skill and chute type and tell him when to pull cord
}else{// If neither are true diver is tandem jumper and must pull cord at 5000 feet.
    console.log("You are a " + tandemDiver + " diver.\nPull the cord no later than 5000 feet");//tell user his skill and chute type and tell him when to pull cord
}
