let leia = require('prompt-sync')();

let opcao = parseInt(leia("Escolha a opção de pagamento:\n1 - à vista (desconto de 10%)\n2 - à prazo\n"));
let valorProduto = parseFloat(leia("Digite o valor do produto: "));

switch(opcao) {
    case 1:
        
        console.log(`O valor a ser pago é de: ${(valorProduto*0.9).toFixed(2)}`);
        break;
    case 2:
        console.log(`O valor a ser pago é de: ${valorProduto.toFixed(2)}`);
        break;
}