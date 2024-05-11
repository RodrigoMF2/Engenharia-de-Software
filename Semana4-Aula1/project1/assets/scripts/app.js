//declaração de vareavies

const resultadoINI = 0;

let resultadoActual = resultadoINI;
let registoEntradas = [];

function lerInput(){
    //ler o input e retornar o valor inteiro correspondente
    const valordigitado = parseInt(userInput.value);
    registoEntradas.push(valordigitado)
    registoEntradas.length
    return parseInt(userInput.value);
}

function lerLog(opernome, resultadoanterior, numerodigitado, resultado){
    const entrada = {
        oper: 'ADD',
        resiltadoAnterior: resultadocorrente,
        numeroDigitado: valordigitado,
        resultado: resultadoActual
    }

    registoEntradas.push(entrada);
}
function fADD(){
    const valordigitado = lerInput();
    const resultadocorrente =resultadoActual;
    const descriCalculo = `${resultadoActual} + ${valordigitado}`;
    resultadoActual = resultadoActual + valordigitado ;
    outputResult(resultadoActual, descriCalculo);

    lerLog('Adicionar', resultadocorrente,valordigitado,resultadoActual)
    console.log(registoEntradas);
}

function fSub (){
    const valordigitado = lerInput();
    const resultadocorrente =resultadoActual;
    const descriCalculo = `${resultadoActual} - ${valordigitado}`;
    resultadoActual = resultadoActual - valordigitado ;

    lerLog('Subrair', resultadocorrente,valordigitado,resultadoActual)
    outputResult(resultadoActual, descriCalculo);

}
function fMUl (){
    const valordigitado = lerInput();
    const resultadocorrente =resultadoActual;
    const descriCalculo = `${resultadoActual} * ${valordigitado}`;
    resultadoActual = resultadoActual * valordigitado ;

    lerLog('Multiplicar', resultadocorrente,valordigitado,resultadoActual)
    outputResult(resultadoActual, descriCalculo);
}
function fDivi() {
    const valordigitado = lerInput();
    const resultadocorrente =resultadoActual;
    const descriCalculo = `${resultadoActual} / ${valordigitado}`;
    resultadoActual = resultadoActual / valordigitado ;

    lerLog('Dividir', resultadocorrente,valordigitado,resultadoActual)
    outputResult(resultadoActual, descriCalculo);
}

addBtn.addEventListener('click', fADD);
subtractBtn.addEventListener('click', fSub);
multiplyBtn.addEventListener('click', fMUl);
divideBtn.addEventListener('click', fDivi);


