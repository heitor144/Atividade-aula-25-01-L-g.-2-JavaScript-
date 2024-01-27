let leia = require('prompt-sync')()

let opcao = parseInt(leia("Escolha o número referente a opção a ser calculada:\n1 - Taxa de natalidade\n2 - Taxa de mortalidade\n"));

clearInterval();

let habitantes = parseInt(leia("Digite o número de habitantes: "));

switch (opcao) {

    case 1:
        let nascimentos = parseInt(leia("Digite o número de nascimentos: "));
        console.log(`A taxa de natalidade é de: ${(nascimentos*1000)/habitantes} a cada mil habitantes`);
        break;
    case 2:
        let obitos = parseInt(leia("Digite o número de óbitos: "));
        console.log(`A taxa de mortalidade é de: ${(obitos*1000)/habitantes} a cada mil habitantes`);
        break;

    default:
        console.log("Opção inválida.");
        break;
}