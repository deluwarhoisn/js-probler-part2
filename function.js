// function square(input){
//     let squareNew = input * input;
//     console.log(squareNew);
//     return squareNew;
// }
// let result = square(11);
// console.log(result);


//---------------- function






function sun(input1,input2){
    let resul = input1 + input2;
    // console.log(result);
    return resul;

}

function multiply(input1, input2){
    let result = input1 * input2;
    // console.log(result);
    return result;
}

let a = 2;
let b = 4;

const result = sum(a,b) + multiply (a,b);
console.log(result);









 //------->vauale ber kora


function countVowels(str){
if(typeof str !== 'string'){ // srting invalid
    return 'invalid'
}

let count = 0;
for(let i=0;i<str.length;i++){
    if(str[i]== 'a' || str[i] == 'e' || str[i]== 'i' || str[i]== 'o' || str[i]== 'u'){
        count ++;
    }
}
return count;
}
// let result= countVowels(111);  string invalid
let resul= countVowels('data')
console.log(resul)




//                810
function cashOut(money) {
  if (money < 0 || typeof money != "number") {
    return "Invalid";
  }
  let charge = money * (1.75 / 100);
  let fixedcharge = charge.toFixed(4); //1.7500 -> string
  let finalCharge = parseFloat(fixedcharge); //1.75
  return finalCharge;
}




function validProposal(person1, person2) {
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "Invalid";
  }

  if (person1.gender == person2.gender) {
    // You have to write your code here
    return false;
  } else if (Math.abs(person1.age - person2.age) > 7) {
    return false;
  } else return true;
}
console.log(validProposal(1, { name: "bjoy", gender: "male", age: 32 }));