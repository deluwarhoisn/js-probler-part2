/**
 * upto 100: ---> 100
 * more than 101-200:--> 90
 * more than 200: --> 70
 */

function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
    }
}

const total = discountedPrice(5);
console.log(total);

//-------------

function layeredDiscountedTotal (quantity){
    const first100price = 100;
    const second100price = 90;
    const above200price = 70;
    if(quantity <= 100){
        const total = quantity * first100price;
        return total;
    }
    else if(quantity <= 200){
        const first100price = 10 * first100price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else{
        const first100price = 100 * first100price;
        const second100total = 100 * second100price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200price;
        const total = first100price + second100price + remainingTotal;
        return total;
    }
}
const all =layeredDiscountedTotal(34)
console.log(all)