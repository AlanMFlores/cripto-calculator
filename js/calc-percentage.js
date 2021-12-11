// ########## Cálculo de Porcentaje ########## //

const calcPercPartialPurchase = document.getElementById('calc-perc-partial-purchase');
const calcPercPartialPercentage = document.getElementById('calc-perc-partial-percentage');
const calcPercResult = document.getElementById('calc-perc-result');

// ##### Button ##### //
const calcPercBtn = document.getElementById('calc-perc-btn');

// ##### Function ##### //
const gainPercentage = (purPri, perc) => {
    const difference = (purPri * perc) / 100;
    const salePrice = Number(purPri) + Number(difference);
    const finalValue = salePrice.toLocaleString('en-US');
    return finalValue;
}

// ##### Event ##### //
calcPercBtn.addEventListener('click', () => {
     // Getting Values
     const calcPercAmount = document.getElementById('calc-perc-amount').value;
     const calcPercPrice = document.getElementById('calc-perc-price').value;
     const calcPercPercentage = document.getElementById('calc-perc-percentage').value;
     // Partials
     const finalPrice = calcPercPrice;
     const finalPerc = calcPercPercentage;
     const finalPurchase = calcPercAmount * calcPercPrice;
     // Print Partials
    calcPercPartialPurchase.innerHTML = `${finalPurchase.toFixed(2)}USD`;
    calcPercPartialPercentage.innerHTML = `${finalPerc}%`;
    // Result
    const finalResult = gainPercentage(finalPrice, finalPerc)
    calcPercResult.innerHTML = `${finalResult}USD`;
    calcPercResult.style.color = '#1DD655';
    
})