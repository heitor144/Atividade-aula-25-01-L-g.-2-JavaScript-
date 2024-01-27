let leia = require('prompt-sync')()

let mes = parseInt(leia("Escolha um número de 1 a 12: "));

switch (mes) {

    case 1:
        console.log(`O mês referente ao número escolhido é: Janeiro.`)
        break;
    case 2:
        console.log(`O mês referente ao número escolhido é: Fevereiro.`)
        break;
    case 3:
        console.log(`O mês referente ao número escolhido é: Março.`)
        break;
    case 4:
        console.log(`O mês referente ao número escolhido é: Abril.`)
        break;
    case 5:
        console.log(`O mês referente ao número escolhido é: Maio.`)
        break;
    case 6:
        console.log(`O mês referente ao número escolhido é: Junho.`)
        break;
    case 7:
        console.log(`O mês referente ao número escolhido é: Julho.`)
        break;
    case 8:
        console.log(`O mês referente ao número escolhido é: Agosto.`)
        break;
    case 9:
        console.log(`O mês referente ao número escolhido é: Setembro.`)
        break;
    case 10:
        console.log(`O mês referente ao número escolhido é: Outubro.`)
        break;
    case 11:
        console.log(`O mês referente ao número escolhido é: Novembro.`)
        break;
    case 12:
        console.log(`O mês referente ao número escolhido é: Dezembro.`)
        break;

    default:
        console.log("Opção inválida.");
        break;
}