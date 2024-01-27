let leia = require('prompt-sync')();

var sexo = leia("Digite a letra referente ao seu sexo:\nM - Masculino\nF - Feminino\n");

var peso = parseFloat(leia("Digite agora o seu peso: "));

switch (sexo) {
    case 'M':
        console.log(`Seu sexo é Masculino e seu peso ideal é: ${((peso-100) * 0.9).toFixed(2)}`); //Segui a fórmula do enunciado mesmo não estando correta.
        break;
    case 'F':
        console.log(`Seu sexo é Feminino e seu peso ideal é: ${((peso-100) * 0.85).toFixed(2)}`); //Segui a fórmula do enunciado mesmo não estando correta.
        break;
    default:
        console.log(`Nenhuma das opções possíveis selecionadas.`);
}