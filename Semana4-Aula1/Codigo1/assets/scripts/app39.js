const valorDefeito = 0;
let resultadoCorrente = valorDefeito;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function adicionar() {
  const valorDigitado = getUserNumberInput();
  const descriCalculo = `${resultadoCorrente} + ${valorDigitado}`;
  resultadoCorrente = resultadoCorrente + valorDigitado;

  outputResult1(resultadoCorrente, descriCalculo);
}

function subtrair() {
    const valorDigitado = getUserNumberInput();
    const descriCalculo = `${resultadoCorrente} - ${valorDigitado}`;
    resultadoCorrente = resultadoCorrente - valorDigitado;
  
    //resultadoCorrente = resultadoCorrente + +userInput.value;
    outputResult(resultadoCorrente, descriCalculo);
}

function multiplicar() {
    const valorDigitado = getUserNumberInput();
    const descriCalculo = `${resultadoCorrente} * ${valorDigitado}`;
    resultadoCorrente = resultadoCorrente * valorDigitado;
  
    //resultadoCorrente = resultadoCorrente + +userInput.value;
    outputResult(resultadoCorrente, descriCalculo);
}

function dividir() {
    const valorDigitado = getUserNumberInput();
    const descriCalculo = `${resultadoCorrente} / ${valorDigitado}`;
    resultadoCorrente = resultadoCorrente / valorDigitado;
  
    //resultadoCorrente = resultadoCorrente + +userInput.value;
    outputResult(resultadoCorrente, descriCalculo);
}

//addBtn.addEventListener('click', adicionar())
addBtn.addEventListener('click', adicionar);
subtractBtn.addEventListener('click',subtrair);
multiplyBtn.addEventListener('click',multiplicar);
divideBtn.addEventListener('click',dividir);

