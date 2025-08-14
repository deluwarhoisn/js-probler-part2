// function totalFine(fare) {
//     if (!Number.isInteger(fare) || fare <= 0) {
//         return "Invalid";
//     }
//     const vat = fare * 0.20;
//     const additionalCharge = 30;

//     const total = fare + vat + additionalCharge;

//     return total;
// }



function totalFine( fare ) {
          if(!Number.isInteger(fare) || fare <= 0){
            return "Invalid"
          }
          const vat = fare * 0.20;
          const additionalCharge = 30;
          const total = fare + vat + additionalCharge;
          return total
}


console.log(totalFine(200));  
console.log(totalFine(0));    
console.log(totalFine(50));   
console.log(totalFine(552)); 
console.log(totalFine(-35));  
console.log(totalFine("65")); 
console.log(totalFine("Gurubd tai ticket korenai")); 
