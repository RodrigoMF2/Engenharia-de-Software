const valorDefeito = 0
let resultadoCorrente = valorDefeito;

function adicionar(num1, num2)  {
    const result = num1 + num2;
    return result; 
}

resultadoCorrente = adicionar(102,23);


let descriCalculo = `(${valorDefeito} + 10) * 3 / 2 - 1`;


outputResult(resultadoCorrente,descriCalculo);