// 1. Escreva um programa em que o usuário informe dois números. Então escreva 
// em tela o maior deles.

var n1 = parseInt(prompt("Digite o primeiro numero"));
var n2 = parseInt(prompt("Digite o segundo numero"));

if ( n1 > n2 ){
    alert("O primeiro numero é o maior!!"+ n1)
}else{
    alert("O segundo numero é o maior"+ n2)
}