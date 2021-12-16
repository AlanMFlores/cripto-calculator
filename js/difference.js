// ##########  Diferencia de Operación ########## //

const difPartialPurchase = document.getElementById('dif-partial-purchase');
const difPartialSale = document.getElementById('dif-partial-sale');
const difResult = document.getElementById('dif-result');

// ##### Button ##### //


const difBtn = document.getElementById('dif-btn');

// ##### Difference Function ##### //

const differenceCalculation = (amPur, purPri, amSal, salPri) => {
    const purchaseValue = amPur * purPri;
    const saleValue = amSal * salPri;
    const difference = saleValue - purchaseValue;
    const finalValue = Number(difference.toFixed(2)).toLocaleString('en-US');
    return finalValue;
}

// ##### Percentage Function ##### //

const percentageDifferenceCalculation = (amPur, purPri, amSal, salPri) => {
    const firstValue = (amPur * purPri);
    const newValue = (amSal * salPri);
    const percentage = ((newValue - firstValue) / firstValue) * 100;
    const finalValue = Number(percentage.toFixed(2)).toLocaleString('en-US');
    return finalValue;
}

//##### Event ##### //

difBtn.addEventListener('click', () => {
    // Getting Values
    const difPurchaseAmount = document.getElementById('dif-purchase-amount').value;
    const difPurchasePrice = document.getElementById('dif-purchase-price').value;
    const difSaleAmount = document.getElementById('dif-sale-amount').value;
    const difSalePrice = document.getElementById('dif-sale-price').value;
    // Partials
    const finalPurchase = difPurchaseAmount * difPurchasePrice;
    const finalSale = difSaleAmount * difSalePrice;
    // Print Partials
    difPartialPurchase.innerHTML = `${finalPurchase.toFixed(2)}USD`;
    difPartialSale.innerHTML = `${finalSale.toFixed(2)}USD`;
    // Result
    const finalResult = differenceCalculation(difPurchaseAmount, difPurchasePrice, difSaleAmount, difSalePrice);
    const finalPercentage = percentageDifferenceCalculation(difPurchaseAmount, difPurchasePrice, difSaleAmount, difSalePrice);
    // Conditional Colors
    if(finalSale > finalPurchase) {
        difResult.innerHTML = `${finalResult} USDT ↑ (+${finalPercentage}%)`;
        difResult.style.color = '#1DD655';
    }
    else if(finalSale === finalPurchase) {
        difResult.innerHTML = `${finalResult} USDT = (${finalPercentage}%)↑`;
        difResult.style.color = '#FAFAFA';
    }
    else {
        difResult.innerHTML = ` ${finalResult} USDT ↓ (${finalPercentage}%)`;
        difResult.style.color = '#E12424';
    }

})