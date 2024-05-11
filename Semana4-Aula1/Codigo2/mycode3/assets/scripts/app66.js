const valorDefeito = 0;
let resultadoCorrente = valorDefeito;

let registoEntradas = [];

/* function adicionar(num1, num2)  {
    const result = num1 + num2;
    return result;
    
} */

// Exemplo de comentários 

function getUserNumberInput() {
    return parse(userInput.value);
}

function writeToLog(
    operationId, 
    resultadoAnt, 
    operando, 
    novoResultado) {
        const entrada = {
            oper: operationId,
            resultadoAnt: resultadoAnt,
            numero: operando,
            resultado: novoResultado
        };

        registoEntradas.push(entrada);
        console.log(registoEntradas);      
        

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
    writeToLog('ADICIONAR',resultIni,valorDigitado,resultadoCorrente);
  

}

function subtrair() {
    const valorDigitado = getUserNumberInput();
  const resultIni = resultadoCorrente;
  resultadoCorrente -= valorDigitado;
  criarEmostrarOutput('-', resultIni, valorDigitado);
  writeToLog('SUBTRAIR',resultIni,valorDigitado,resultadoCorrente);
}

function multiplicar() {
    const valorDigitado = getUserNumberInput();
  const resultIni = resultadoCorrente;
  resultadoCorrente *= valorDigitado;
  criarEmostrarOutput('*', resultIni, valorDigitado);
  writeToLog('MULTIPLICAR',resultIni,valorDigitado,resultadoCorrente);
}

function dividir() {
    const valorDigitado = getUserNumberInput();
  const resultIni = resultadoCorrente;
  resultadoCorrente /= valorDigitado;
  criarEmostrarOutput('/', resultIni, valorDigitado);
  writeToLog('DIVIDIR',resultIni,valorDigitado,resultadoCorrente);
}

//addBtn.addEventListener('click', adicionar())
addBtn.addEventListener('click', adicionar);
subtractBtn.addEventListener('click',subtrair);
multiplyBtn.addEventListener('click',multiplicar);
divideBtn.addEventListener('click',dividir);

