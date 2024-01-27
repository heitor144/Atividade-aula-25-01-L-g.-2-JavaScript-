let leia = require('prompt-sync')()

let numero1 = leia("Digite o primeiro numero: ")
let numero2 = leia("Digite o segundo numero: ")


console.log(" 1 - Soma");
console.log(" 2 - Subtração");
console.log(" 3 - Multiplicação");
console.log(" 4 - Divisão");

opcao = parseInt(leia("Escolha uma operação para ser realizada entre os dois números: "));

switch (opcao) {

    case 1:
        console.log(`Resultado da soma: ${numero1+numero2}`)
        break;
    case 2:
        console.log(`Resultado da subtração: ${numero1-numero2}`)
        break;
    case 3:
        console.log(`Resultado da multiplicação: ${numero1*numero2}`)
        break;
    case 4:
        console.log(`Resultado da divisão: ${numero1/numero2}`)
        break;

    default:
        console.log("Opção inválida.");
        break;
}
