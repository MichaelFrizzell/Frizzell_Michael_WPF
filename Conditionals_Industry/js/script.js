// Michael Frizzell
// October 16th 2013
// Conditionals_Industry


//I get off early every friday if i type x amount of words that week
//given i type x amount of words per minute
//and worked x amount of hours that week
// i can leaved work early friday or not
//LEAVE EARLY FOR WORK?

var wordsRequiredWeek = prompt("How many words are required this week?");//collects required data from user
console.log(wordsRequiredWeek);//prints to console users data

var wordsPerMinute = prompt("How many words do you type a minute?");//collects required data from user
console.log(wordsPerMinute);//prints to console users data

var hoursWorked = prompt("How many hours have you worked this week?");//collects required data from user
console.log(hoursWorked);//prints to console users data

var totalMinutes = hoursWorked * 60;//sets variable value for total minutes worked by multiplying the hours worked by 60.
console.log(totalMinutes);//prints to console total minutes worked

var totalWordsTyped = totalMinutes * wordsPerMinute;//set variable value for total words typed by multiplying the total minutes worked by the words per minute
console.log(totalWordsTyped);//prints to console total words typed
//if total words typed are greater than or equal to the amount of words required that week, statement is true and they can leave early, if not they have to keep working.
(totalWordsTyped >= wordsRequiredWeek) ? console.log("You have typed " + totalWordsTyped + " words.\nYou can leave EARLY!") : console.log("You have only typed " + totalWordsTyped + "\nBetter keep working!")