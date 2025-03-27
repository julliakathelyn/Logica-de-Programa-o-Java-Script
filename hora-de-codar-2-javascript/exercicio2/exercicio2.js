//2. Faça um programa que leia um valor informado pelo usuário e diga se o valor 
// informado é positivo, negativo ou zero.

var n1 = parseInt(prompt("Digite o primeiro numero"));

if(n1 > 0){
    alert("O valor é Positivo")
}else if(n1 < 0){
    alert("O valor é Negativo")
}else{
    alert("O valor é zero")
}