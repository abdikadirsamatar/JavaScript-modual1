let people = 38;
let vanpeople = 15;
let vancost = 250;

let totalvansneeded = people / vanpeople;
let totalvancost = vancost * Math.ceil(totalvansneeded);
let amountperperson = totalvancost / people;

console.log(Math.ceil(totalvansneeded))
console.log(totalvancost.toFixed(2))
console.log(`the amount per person whould be ${amountperperson.toFixed(2)}`)