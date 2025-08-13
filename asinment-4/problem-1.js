function totalFine(fare) {
    if (!Number.isInteger(fare) || fare <= 0) {
        return "Invalid";
    }
    const vat = fare * 0.20;
    const additionalCharge = 30;

    const total = fare + vat + additionalCharge;

    return total;
}

console.log(totalFine(200));  
console.log(totalFine(0));    
console.log(totalFine(50));   
console.log(totalFine(552)); 
console.log(totalFine(-35));  
console.log(totalFine("65")); 
console.log(totalFine("Gurubd tai ticket korenai")); 

//-------------> problem-2

function onlyCharacter(str) {
  if (typeof str !== 'string') {
    return "Invalid";
  }

  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9') || char === '-' || char === '@' || char === ':') {
      result += char;
    }
  }
  return result.toUpperCase();
}

console.log(onlyCharacter("h e l l o wo r l d")); 
console.log(onlyCharacter("Cy bar-At tac k")); 
console.log(onlyCharacter("hac k m e 1 @ru.c n"));
console.log(onlyCharacter("Ser ver :: Do wn")); 

console.log(onlyCharacter(["hack", "me"])); 
console.log(onlyCharacter(true)); 