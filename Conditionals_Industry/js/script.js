// Michael Frizzell
// October 16th 2013
// Conditionals_Industry


//I get off early every friday if i type x amount of words that week
//given i type x amount of words per minute
//and worked x amount of hours that week
// i can leaved work early friday or not
//LEAVE EARLY FOR WORK?

var wordsRequiredWeek = prompt("How many words are required this week?");
console.log(wordsRequiredWeek);

var wordsPerMinute = prompt("How many words do you type a minute?");
console.log(wordsPerMinute);

var hoursWorked = prompt("How many hours have you worked this week?");
console.log(hoursWorked);

var totalMinutes = hoursWorked * 60;
console.log(totalMinutes);

var totalWordsTyped = totalMinutes * wordsPerMinute;
console.log(totalWordsTyped);

(totalWordsTyped >= wordsRequiredWeek) ? console.log("You have typed " + totalWordsTyped + " words.\nYou can leave EARLY!") : console.log("You have only typed " + totalWordsTyped + "\nBetter keep working!")