const valorDefeito = 0;
let resultadoCorrente = valorDefeito;

let registoEntradas = [];

/* function adicionar(num1, num2)  {
    const result = num1 + num2;
    return result;
    
} */

// Exemplo de comentários 

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function criarEmostrarOutput(operador, resultadoAntesCalc, numCalculado) {
    const descriCalculo = `${resultadoAntesCalc} ${operador} ${numCalculado}`; 
    outputResult(resultadoCorrente, descriCalculo);
}


function adicionar() {
  const valorDigitado = getUserNumberInput();
  const resultIni = resultadoCorrente;
  resultadoCorrente += valorDigitado;
  criarEmostrarOutput('+', resultIni, valorDigitado);

  const entrada = {
      oper: 'ADD',
      resultadoAnt: resultIni,
      numero: valorDigitado,
      resultado: resultadoCorrente
  };
  
  //registoEntradas = [valorDigitado];
  registoEntradas.push(entrada);
  console.log(registoEntradas);
  //console.log(registoEntradas[0]);

  //resultadoCorrente = resultadoCorrente + +userInput.value;
  
}

function subtrair() {
    const valorDigitado = getUserNumberInput();
  const resultIni = resultadoCorrente;
  resultadoCorrente -= valorDigitado;
  criarEmostrarOutput('-', resultIni, valorDigitado);
}

function multiplicar() {
    const valorDigitado = getUserNumberInput();
  const resultIni = resultadoCorrente;
  resultadoCorrente *= valorDigitado;
  criarEmostrarOutput('*', resultIni, valorDigitado);
}

function dividir() {
    const valorDigitado = getUserNumberInput();
  const resultIni = resultadoCorrente;
  resultadoCorrente /= valorDigitado;
  criarEmostrarOutput('/', resultIni, valorDigitado);
}

//addBtn.addEventListener('click', adicionar())
addBtn.addEventListener('click', adicionar);
subtractBtn.addEventListener('click',subtrair);
multiplyBtn.addEventListener('click',multiplicar);
divideBtn.addEventListener('click',dividir);

