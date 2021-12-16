// ##########  Conversión de USDT ########## //

const convResult = document.getElementById('conv-result');

// ##### Button ##### //

const convBtn = document.getElementById('conv-btn');

// ##### Conversion Function ##### //

const conversionUsdtCripto = (amUsdt, prCri) => {
    const conversionValue = amUsdt / prCri;
    const finalValue = conversionValue.toFixed(8).toLocaleString('en-US');
    return finalValue;
}

//##### Event ##### //

convBtn.addEventListener('click', () => {
    // Getting Values
    const usdtAmount = document.getElementById('usdt-amount').value;
    const criptoPrice = document.getElementById('cripto-price').value;
    //Result 
    const finalResult = conversionUsdtCripto(usdtAmount, criptoPrice);
    convResult.innerHTML = finalResult;
    convResult.style.color = '#1DD655';
})