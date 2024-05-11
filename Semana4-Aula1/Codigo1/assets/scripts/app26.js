const valorDefeito = 0
let resultadoCorrente = valorDefeito;

function adicionar(num1, num2)  {
    const result = num1 + num2;
    //return result;
    alert('O resultado é '+result)
}

adicionar(31,13);
adicionar(12,21);

resultadoCorrente = (resultadoCorrente + 10) * 3 / 2 - 1 ;

let descriCalculo = `(${valorDefeito} + 10) * 3 / 2 - 1`;


outputResult(resultadoCorrente,descriCalculo);