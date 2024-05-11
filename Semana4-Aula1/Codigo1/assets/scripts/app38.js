const valorDefeito = 0;
let resultadoCorrente = valorDefeito;

/* function adicionar(num1, num2)  {
    const result = num1 + num2;
    return result;
    
} */

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function adicionar() {
  const valorDigitado = getUserNumberInput();
  const descriCalculo = `${resultadoCorrente} 
                          + ${valorDigitado}`;
  resultadoCorrente = resultadoCorrente + valorDigitado;

  outputResult(resultadoCorrente, descriCalculo);
}

addBtn.addEventListener('click', adicionar);
