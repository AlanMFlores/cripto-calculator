// ########## Cálculo de Porcentaje ########## //

const calcSlPartialPurchase = document.getElementById('calc-sl-partial-purchase');
const calcSlPartialPercentage = document.getElementById('calc-sl-partial-percentage');
const calcSlResult = document.getElementById('calc-sl-result');

// ##### Button ##### //
const calcSlBtn = document.getElementById('calc-sl-btn');

// ##### Function ##### //
const stopLossCalculation = (purPri, perc) => {
    const difference = (purPri * perc) / 100;
    const salePrice = purPri - difference;
    const finalValue = Number(salePrice.toFixed(2)).toLocaleString('en-US');
    return finalValue;
}

// ##### Event ##### //
calcSlBtn.addEventListener('click', () => {
     // Getting Values
     const calcSlAmount = document.getElementById('calc-sl-amount').value;
     const calcSlPrice = document.getElementById('calc-sl-price').value;
     const calcSlPercentage = document.getElementById('calc-sl-percentage').value;
     // Partials
     const finalPrice = calcSlPrice;
     const finalPerc = calcSlPercentage;
     const finalPurchase = calcSlAmount * calcSlPrice;
     // Print Partials
    calcSlPartialPurchase.innerHTML = `${finalPurchase.toFixed(2)}USD`;
    calcSlPartialPercentage.innerHTML = `${finalPerc}%`;
    // Result
    const finalResult = stopLossCalculation(finalPrice, finalPerc)
    calcSlResult.innerHTML = `${finalResult}USD`;
    calcSlResult.style.color = '#E12424';
    
})