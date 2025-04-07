// 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

var n1 = parseInt(prompt("Informe o primeiro numero"));
var n2 = parseInt(prompt("Informe o segundo numero"));

while(n1 > n2 ){
    n2 = parseInt(prompt("Informe o segundo valor Novamente"));
}



var media =  (((n2 - n1) + 1) * (n2 + n1)) /2;

alert(media);
