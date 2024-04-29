"use strict";
 let payRate = 17.30;
 let hoursWorked = 45;
 let extrahours = hoursWorked - 40;
 let extrahoursrate = payRate*1.5;
 let regulartotalpay ;
 let extraHourspay = extrahoursrate*extrahours;
 let grosspay = regulartotalpay + extraHourspay;

 //tax variables 
 let annualAmount = grosspay*52;
 let fileingstatus = "single"
let taxeRate = null

 if(fileingstatus == `single` ){
    console.log(` your single you annoulamount is ${annualAmount}`)
    if(annualAmount <= 12000){
        console.log(` your tax rate is .5 `)
        taxeRate = .05
    }

        
    }
 } 

