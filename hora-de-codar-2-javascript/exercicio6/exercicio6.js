//6. Faça um programa que receba quatro valores informados pelo usuário, mas informe
//  somente o primeiro, o último e o maior de todos eles (considere que todos os
//  números informados serão diferentes)

var n1 = parseInt(prompt("Digite o primeiro valor "));
var n2 = parseInt(prompt("Digite o segundo valor "));
var n3 = parseInt(prompt("Digite o terceiro valor "));
var n4 = parseInt(prompt("Digite o quarto valor "));

if (n1 > n2 & n1 > n3 & n1 > n4) {
    alert(" O primeiro valor é: " + n1 + ", o ultimo valor é " + n4 + " e O maior valor é: " + n1);
} else if (n2 > n1 & n2 > n3 & n2 > n4) {
    alert(" O primeiro valor é: " + n1 + ", o ultimo valor é " + n4 + " e O maior valor é: " + n2);
} else if (n3 > n1 & n3 > n2 & n3 > n4) {
    alert(" O primeiro valor é: " + n1 + ", o ultimo valor é " + n4 + " e O maior valor é: " + n3);
}else {
    alert(" O primeiro valor é: " + n1 + ", o ultimo valor é " + n4 + " e O maior valor é: " + n4);
}
