// ##########  Reseteo de Inputs ########## //

// ##########  Reset Button ########## //

const btnReset = document.getElementById('reset-btn');

// ##########  Events ########## //

btnReset.addEventListener('click', () => {
    const inputs = document.querySelectorAll('input[type=number]');
    const results = document.querySelectorAll('.result');
    const partials = document.querySelectorAll('.partial-num');
    inputs.forEach( input => {
        input.value = '';
    })
    results.forEach(result => {
        result.innerHTML = '- -';
        result.style.color = '#FAFAFA';
    })
    partials.forEach(partial => {
        partial.innerHTML = '- -';
    })
})
