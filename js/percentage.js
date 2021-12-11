// ########## Porcentaje de Operación ########## //

const percPartialPurchase = document.getElementById('perc-partial-purchase');
const percPartialSale = document.getElementById('perc-partial-sale');
const percResult = document.getElementById('perc-result');

// ##### Button ##### //
const percBtn = document.getElementById('perc-btn');

// ##### Function ##### //
const percentageDifferenceCalculation = (amPur, purPri, amSal, salPri) => {
    const firstValue = (amPur * purPri);
    const newValue = (amSal * salPri);
    const percentage = ((newValue - firstValue) / firstValue) * 100;
    const finalValue = Number(percentage.toFixed(2)).toLocaleString('en-US');
    return finalValue;
}

// ##### Event ##### //

percBtn.addEventListener('click', () => {
     // Getting Values
     const percPurchaseAmount = document.getElementById('perc-purchase-amount').value;
     const percPurchasePrice = document.getElementById('perc-purchase-price').value;
     const percSaleAmount = document.getElementById('perc-sale-amount').value;
     const percSalePrice = document.getElementById('perc-sale-price').value;
     // Partials
     const finalPurchase = percPurchaseAmount * percPurchasePrice;
     const finalSale = percSaleAmount * percSalePrice;
     // Print Partials
    percPartialPurchase.innerHTML = `${finalPurchase.toFixed(2)}USD`;
    percPartialSale.innerHTML = `${finalSale.toFixed(2)}USD`;
    // Result
    const finalResult = percentageDifferenceCalculation(percPurchaseAmount, percPurchasePrice, percSaleAmount, percSalePrice);
    // Conditional Colors
    if(finalSale > finalPurchase) {
        percResult.innerHTML = `+${finalResult}%`;
        percResult.style.color = '#1DD655';
    }
    else if(finalSale === finalPurchase) {
        percResult.innerHTML = `${finalResult}%`;
        percResult.style.color = '#FAFAFA';
    }
    else {
        percResult.innerHTML = ` ${finalResult}%`;
        percResult.style.color = '#E12424';
    }

})