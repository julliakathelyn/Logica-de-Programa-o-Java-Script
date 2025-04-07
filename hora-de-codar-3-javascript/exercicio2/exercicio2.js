//2 - Escreva um algoritmo para ler 2 valores informados pelo usuário e enquanto o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor, mas para a mesma variável. Ou seja, para o segundo valor não pode ser aceito o valor zero nem um valor negativo. 

//O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor e exibir o resultado ao usuário.

var n1 = parseInt(prompt("Informe o primeiro numero "));
var n2 = parseInt(prompt("Innforme o segunndo numero "));

while(n2 <= 0){
    n2 = parseInt(prompt("Innforme o segunndo numero novamente(maior que zero) "));
}

var calculo = n1/n2;

alert(calculo)


