//5.  Faça um programa que leia 6 valores informados pelo usuário, calcule,
//  exiba os números informados e escreva a média aritmética desses valores lidos.

var n1 = parseInt(prompt("Digite o primeiro valor "));
var n2 = parseInt(prompt("Digite o segundo valor "));
var n3 = parseInt(prompt("Digite o terceiro valor "));
var n4 = parseInt(prompt("Digite o quarto valor "));
var n5 = parseInt(prompt("Digite o quinto valor "));
var n6 = parseInt(prompt("Digite o sexto valor "));

alert("Numeros informados: " + n1 +" " + n2+" " + n3+" " + n4+" " +n5+" " +n6+" " );

var media = (n1+n2+n3+n4+n5+n6)/6

alert("A media é "+ media)