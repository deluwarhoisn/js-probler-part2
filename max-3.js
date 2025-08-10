const jim = 56;
const tim = 89;
const kim = 68;

if(jim > tim && jim > kim){
    console.log('jim is the ultimate boss')
}
else if(tim > jim && tim > kim){
    console.log('tim is the boss')
}
else{
    console.log('kim is the kardasians boss')
}

// function 

function maxOfTHree ( num1,num2,num3){
    if(num1>= num2 && num1 >= num3){
        return num1
    }
    else if(num2 >= num1 && num2 >= num3){
         return num2
    }
       
    
    else{
        return num3
    }
}
const max3 = maxOfTHree(100,200,80);
console.log(max3);

// Math -problem -3

const max = Math.max(12,34,56,89,13,);
console.log('max isuniq Math .max',max);