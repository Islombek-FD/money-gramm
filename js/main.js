var elForm = document.querySelector('.currency__form');
elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    var elInput = Number(document.querySelector('.currency__input').value);
    var elSelect = document.querySelector('.currency__select-type').value;
    var elSelectResult = document.querySelector('.currency__select-type--result').value;

    var calculator = elInput;

    var USD_TO_SUM = 10710;
    var EUR_TO_SUM = 12602.11;
    var RUB_TO_SUM = 145.70;

    if(elSelect === 'usd') {
        calculator *= USD_TO_SUM;
    }else if(elSelect === 'eur') {
        calculator *= EUR_TO_SUM;
    }else if(elSelect === 'rub') {
        calculator *= RUB_TO_SUM;
    }

    var resultCalculator = calculator;

    if(elSelectResult === 'usd') {
        resultCalculator /= USD_TO_SUM;
    }else if(elSelectResult === 'eur') {
        resultCalculator /= EUR_TO_SUM;
    }else if(elSelectResult === 'rub') {
        resultCalculator /= RUB_TO_SUM;
    }

    document.querySelector('.currency__result').value = `${resultCalculator}`;
})