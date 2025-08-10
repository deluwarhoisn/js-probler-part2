/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
 */

function woodQuantity(chairQuantity, tabilQuantity, bedQuantity){
    const perChairWood = 3;
    const perTabilWood = 10;
    const perBedWood = 50;

    const ChairTotalWood = chairQuantity * perChairWood;
    const tabilTotalWood = tabilQuantity * perTabilWood;
    const bedTotalWood = bedQuantity       perBedWood;

   const TotalWood = ChairTotalWood + tabilTotalWood + bedTotalWood;
   return TotalWood;
}

const wood = woodQuantity(0,0,1)
console.log('wood needed',wood);