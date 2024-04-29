"use script"
let a = 3;
let b = 2;
let c = 4;
let smalletst;

if (a < b && a < c) {
    // let smallets = a;
    console.log(`The smallest value is: ${a}`);
  } else if (b < a && b < c) {
    console.log(`The smallest value is: ${b}`);
  } else {
    console.log(`The smallest value is: ${c}`);
  }
  //input


//Algoritme
if (a > b && a > c) {
    largest = a; // Assign a to largest
  } else if (b > a && b > c) {
    largest = b; // Assign b to largest
  } else {
    largest = c; // Assign c to largest if neither a nor b is the largest
  }
  //output
  console.log(`The largest value is: ${largest}`);