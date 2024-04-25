"use strict";
// declare variables to store the information
//From my sign up for
let name = 'Uriel';
let lastname = 'Delgado';
let emailadress = 'delgadouriel@gmail.com';
let password = '1111';
let recieveemail = 'true';

console.log(`${name}, ${lastname}, ${emailadress}, ${password}, ${recieveemail}.`);


let shoePrice = 100.30;
let taxes = 0.08;
let discount = 5;

let taxesTotal = shoePrice * taxes;
let total = shoePrice + (shoePrice*taxes) - discount;
console.log(`$${total.toFixed(2)}`);

let numberA = 57;
let numberB = 78;
total = numberA + numberB;
console.log(total);

let age = 20;
let retirementAge = 65;
let ageRemain = retirementAge - age;
console.log(` you still need to work for ${ageRemain}, years`)

let newage = age**2;
console.log(newage)


//Declare a new age like 10 years old
//Output: You need 10 more year before you can enter the party.

age = 9;
let agree = 21;
let Xyear = agree - age;
if(age > 21 ) {
    console.log('You are old enough to enter the party');
}
else
{
    console.log(`You need ${Xyear} more years before you can enter the party`);
}


let amountOfPeople = 20;
let pizzaSlices = 8;
let total1 = amountOfPeople/pizzaSlices;
console.log("pizza:" + Math.ceil(total1))

let randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber);




let myNumber = Math.round(Math.random() * 10); // Generate a random number between 1 and 100

console.log('The number to guess is:', myNumber);

// Function to check the user's guess
function checkGuess(userGuess) {
    if(isNaN(userGuess)) {
        console.log("Invalid input. Please enter a valid number.");
    } else if(userGuess > myNumber) {
        console.log('Your number is too high. Try again lower.');
    } else if(userGuess < myNumber) {
        console.log('Your number is too low. Try again higher.');
    } else {
        console.log(`Congratulations! You guessed ${myNumber} correctly.`);
    }
}

// Test with some guesses
checkGuess(6); // Too high
checkGuess(9);
checkGuess(3);
checkGuess(myNumber); // Correct guess

let celsuis = fahrenheit - 32 * 5/9;
let fahrenheit = 90;
let number
console.log(`${celsuis}`)

