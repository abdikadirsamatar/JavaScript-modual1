// Adding a comment to the code

// Creating variables (storing information in the memory of the pc)
//Size color type of shoe, adress
//String: Uses to represent text
let shoeName = "Nike Aire Max";
let color = "black";

let shoePrice = 150.50; // Number
let available = 5;
let isAvailavble = true; //Boolean (true / false

let firstname = "Uriel";
let lastname = "Delgado";
let emailadres = "delgadouriel83@gmail.com";
let age = 20;
let hasPartner = false;
let birthdate = new Date(2003,8,20);

console.log("My name is: " + firstname)
console.log("My last name is: " +  lastname)
console.log("My Emai Adderess is: " + emailadres)
console.log("My age is: " + age)
console.log("my birth date is " + birthdate.toLocaleDateString())



// Options to specify the format as long
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// Display the birthdate in a long, readable format
let formattedDate = birthdate.toLocaleDateString('en-US', options);
console.log("My birthdate (Long Format): " + formattedDate);


function getZodiacSign(date) {
    let month = date.getMonth() + 1; // JavaScript's getMonth() returns 0-11, so add 1 to align with calendar months
    let day = date.getDate();

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "Aquarius";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return "Pisces";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Taurus";
} else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Sagittarius";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return "Capricorn";
    }
}
// Example usage:
let birthdate2 = new Date(1989, 1, 6); // Note: Month is 0-indexed, 1 is February
console.log("Zodiac Sign: " + getZodiacSign(birthdate2));