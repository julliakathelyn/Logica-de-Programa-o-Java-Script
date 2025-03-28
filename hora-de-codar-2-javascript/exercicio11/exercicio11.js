// 11. Uma micro calculadora
//Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).
//O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. 

//Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4 para as operações

var n1 = parseInt(prompt("Digite o primeiro valor "));
var n2 = parseInt(prompt("Digite o segundo valor "));



var operacao = parseInt(prompt("1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação"))

switch (operacao) {
    case 1:
        alert("Adição: " + (n1 + n2))
        break;
    case 2:
        alert("Subtração " + (n1 - n2))
        break;

    case 3:
        if (n2 != 0) {
            alert("Divisão " + (n1 / n2));
        } else {
            alert("Operação invalida");
        }

    case 4:
        alert("Multiplicação " + (n1 * n2))
        break;
    default:
        alert("Valor digitado invalido ");
}