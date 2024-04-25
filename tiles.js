let length = 20;
let width = 10;
let box = 12;
let extra = .10;

let area = length * width;
let numberofboxes = area/box; 
let extraboxes = (numberofboxes * extra) + numberofboxes;
console.log(Math.ceil(numberofboxes));
console.log(Math.ceil(extraboxes));
