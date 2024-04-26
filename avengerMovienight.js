let friendsInvited = 10;
let costPerPerson = 85;
let totalCost = friendsInvited*costPerPerson;

if (totalCost > 0){
    console.log(`The total cost for an epic Avengers movie nith with ${friendsInvited} friends is ${totalCost}`);
}
else if(totalCost < 0) {
    console.log(`Looks like it's a solo night! No cost for extra tickets`);
}
