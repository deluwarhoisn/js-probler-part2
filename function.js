// function square(input){
//     let squareNew = input * input;
//     console.log(squareNew);
//     return squareNew;
// }
// let result = square(11);
// console.log(result);


//---------------- function

// function sun(input1,input2){
//     let resul = input1 + input2;
//     // console.log(result);
//     return resul;

// }

// function multiply(input1, input2){
//     let result = input1 * input2;
//     // console.log(result);
//     return result;
// }

// let a = 2;
// let b = 4;

// const result = sum(a,b) + multiply (a,b);
// console.log(result);



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
let result= countVowels('data')
console.log(result)