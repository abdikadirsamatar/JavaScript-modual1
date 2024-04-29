"use strict";
 let payRate = 17.30;
 let hoursWorked = 45;
 let extrahours = hoursWorked - 40;
 let extrahoursrate = payRate*1.5;
 let regulartotalpay ;
 let extraHourspay = extrahoursrate*extrahours;
 let grosspay = regulartotalpay + extraHourspay;

 if( hoursWorked > 40){
    regulartotalpay = payRate*40
    grosspay = regulartotalpay + extraHourspay
    console.log(`You worked over 40 hour this week paycke comes out to ${grosspay}`)
 }
 else if( hoursWorked<= 40){
    regulartotalpay = payRate*hoursWorked
    console.log(`here is your regular paycheck of ${regulartotalpay}`)

 }
 


