/*=========================================================
    Part 1: Variables
*/
//Exercise 2
var givenName;
var greeting = "Hello, how are you "
// Q: What value is stored in `givenName` right now?
// A: NOTHING


givenName = "Brett";
// Q: What is `givenName` set to now?
// A: Brett


givenName = givenName;
// Q: What is `givenName` set to now?
// A: It is the same.

console.log(greeting + givenName + "?");

// Exercise 3
var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: 40
console.log(math);
math = high - "5";
console.log(math);
// Q: What is `math` set to?
// A: 45
console.log(math * "5")

// Using the `high` & `low` Variables, work through each of the 4 math operators below and log the answers to the console.
// Write Code Below:
console.log(high + low);
console.log(high - low);
console.log(high / low);
console.log(high * low);

// Create a variable to calculate your age
math = high - 18;
// The answer should read "NAME is XX years old"
console.log(givenName + " is " + math + "years old")
// The answer should not be written in a comment.

//Exercise 4
var born = 1984;
var today = 2017;
var age = today - born;
var statement = givenName + " is " + age + " years old"
// Answers Below:
console.log(statement);

//Exercise 5
var isOld;
var myAge = 33;
if (myAge > 45) {
  isOld = true
  console.log("Chris is an old old man")
}  else {
    isOld = false
    console.log("Chris is a young whipper snapper")
  }


// Store some information following in variables.
var yourName = "Chris Colvin";
var instructorName = "Adrian Addison";

// Update the variables above so the expression reads correctly.
// Answers Below:


// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
console.log(statement);

//Exercise 6

var myAge = 45;
var firstName = "Julia";
var lastName = "Roberts";
var fullName = firstName + lastName;

console.log(fullName); // Julia Roberts
var yearBorn = 1975;
var currentYear = 2016;
var age = currentYear - yearBorn;

console.log(age); // 41
// occurs in line 92
// capital V, needs to be var instead of Var
