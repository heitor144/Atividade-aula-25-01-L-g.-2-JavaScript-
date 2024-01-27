let leia = require('prompt-sync')();

var codigo = parseInt(leia("Digite o código referente a:\nComum(1)\nFuncionário(2)\nVip(3)\n "));

var valorCompra = parseFloat(leia("Digite o valor da compra com duas casas decimais: "));

switch(codigo) {
    case 1:
        console.log(`Valor da compra: ${valorCompra}`);
        break;
    case 2:
        console.log(`Valor da compra: ${(valorCompra*0.9).toFixed(2)}`);
        break;
    case 3:
        console.log(`Valor da compra: ${(valorCompra*0.95).toFixed(2)}`);
        break;
    default:
        console.log(`Valor informado inválido.`);
}