"use strict";
//Declare Variables
let firstname = 'Uriel';
let favoriteMeal = 'Burgers';
let favoriteMeal2 = 'Tacos';
let favoriteMeal3 = 'sonora dogs';

//Create a list (Array)
let favoriteMeals = ["Burgers","Tacos","sonora dog"];
console.log(favoriteMeals[0]); //Pasta
console.log(favoriteMeals[1]); //Filibertos
console.log(favoriteMeals[2]);



console.log(favoriteMeal) // undefined

console.log(`Hi my name is Uriel and my 3 favorite meals are: ${favoriteMeals[0]}, ${favoriteMeals[1]}, ${favoriteMeals[2]}"`);
//Out: Hi, my name is Remsey and my 3 favorite meals are: meal1, meal2, meal3           
let priceMeal1 = 17.30;
let priceMeal2 = 5;
let priceMeal3 = 5;
let total = priceMeal1 + priceMeal2 + priceMeal3;
console.log(`The total price of our 3 favorite meals is ${total}`);
 let taxes = 0.08;
 let totalincludetaxes = total * 1.08;
 console.log(`The total price of our 3 favorite meals including taxes is $${totalincludetaxes.toFixed(2)}`);