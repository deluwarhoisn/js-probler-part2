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





function onlyCharacter(str) {
  if (typeof str !== 'string') {
    return "Invalid"
  }
  let result = '';
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



function  bestTeam( player1, player2 ) {
          if(typeof player1 !== 'object' || player1 === null || typeof player2 !== 'object' || player2 === null){
            return 'Invalid';
          }
          const score1 = player1.foul + player1.cardY + player1.cardR;
          const score2 = player2.foul + player2.cardY + player2.cardR;
          if(score1 < score2){
            return player1.name;
          }
          else if(score2 < score1){
            return player2.name;
          }
          else{
            return 'Tie';
          }
}

const brazil = {
  name: "Brazil",
  foul: 5,
  cardY: 1,
  cardR: 0
};
const argentina = {
  name: "Argentina",
  foul: 7,
  cardY: 0,
  cardR: 0
};

const germany_1 = {
  name: "Germany",
  foul: 12,
  cardY: 0,
  cardR: 0
};
const sweden = {
  name: "Sweden",
  foul: 8,
  cardY: 4,
  cardR: 0
};

const germany_2 = {
  name: "Germany",
  foul: 10,
  cardY: 1,
  cardR: 1
};
const france_2 = {
  name: "France",
  foul: 10,
  cardY: 2,
  cardR: 1
};

const france_invalid = "France";

console.log(bestTeam(brazil, argentina));
console.log(bestTeam(germany_1, sweden));
console.log(bestTeam(germany_2, france_2));
console.log(bestTeam(germany_1, france_invalid));


function  isSame(arr1 , arr2 ) {
      if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return 'Invalid';
      }
      if(arr1.length !== arr2.length){
        return false;
      }
      for(let i =0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
          return false;
        }
      }
      return true;
}


console.log(isSame([1, 2, 3], [1, 2, 3])); 
console.log(isSame([34, 5, 7, 9], [34, 5, 7]));
console.log(isSame([1, undefined, 3], [1, null, 3]));
console.log(isSame([1, 4, 5], [1, 4, 5]));
console.log(isSame(['1', '4'], [1, 4])); 
console.log(isSame([2, 5, 6], 256)); 
console.log(isSame("data", [2, 5, 6]));



function  resultReport( marks ) {
          if(!Array.isArray(marks)){
            return 'Invalid'
          }
          if(marks.length === 0){
            return{
              finalScore:0,
              pass:0,
              fail:0,
            };
          }
          let totalScore = 0;
          let passCount = 0;
          let failCount = 0;
          for(let i = 0; i < marks.length;i++){
            const score = marks[i];
            totalScore += score;
            if(score >= 40){
              passCount++;
            }
            else{
              failCount++;
            }
          }
          const averageScore = totalScore / marks.length;
          const finalScore = Math.round(averageScore);
          return{
            finalScore:finalScore,
            pass: passCount,
            fail:failCount
          };
}



console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));

console.log(resultReport([99, 87, 67, 12, 87]));
console.log(resultReport([99]));
console.log(resultReport(100));
