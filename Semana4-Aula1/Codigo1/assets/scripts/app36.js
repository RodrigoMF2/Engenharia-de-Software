const valorDefeito = 0;
let resultadoCorrente = valorDefeito;

/* function adicionar(num1, num2)  {
    const result = num1 + num2;
    return result;
    
} */

function adicionar() {
  resultadoCorrente = resultadoCorrente +
   parseInt(userInput.value);

  //resultadoCorrente = resultadoCorrente + +userInput.value;
  outputResult(resultadoCorrente, '');
}

//addBtn.addEventListener('click', adicionar())
addBtn.addEventListener('click', adicionar);
