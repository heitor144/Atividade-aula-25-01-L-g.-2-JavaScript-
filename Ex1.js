let leia = require('prompt-sync')()

let sair = 1

while (sair != 0){

    console.log(" 1 - Fazer Check-in");
    console.log(" 2 - Chamar serviço de quarto");
    console.log(" 3 - Fazer pedido");
    console.log(" 4 - Fazer Check-out e sair");


    pedido = parseInt(leia("Faça sua escolha: "));

    switch (pedido) {

        case 1:
            console.log("Check-in realizado. Algo mais?")
            break;
        case 2:
            console.log("Serviço solicitado a caminho.")
            break;
        case 3:
            console.log("Escolha o pedido.")
            break;
        case 4:
            console.log("Check-out realizado. Obrigado pela estadia em nosso hotel.")
            sair = 0;
            break;
        case 0:
            console.log("Obrigado.")

        default:
            console.log("Opção inválida.");
            break;
    }
}