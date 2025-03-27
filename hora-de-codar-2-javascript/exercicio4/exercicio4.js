//4. Faça um programa que leia 3 valores informados pelo usuário (considere que 
// não serão informados valores iguais) e escrever a soma dos 2 maiores.

var n1 = parseInt(prompt("Digite o primeiro valor "));
var n2 = parseInt(prompt("Digite o segundo valor "));
var n3 = parseInt(prompt("Digite o terceiro valor "));

if(n1 < n2 & n1 < n3){
    alert("O valor " + n1 +" é o menor. ");
    alert("A soma dos maiores valores é: " + (n2+n3));
}else if(n2 < n1 & n2 < n3){
    alert("O valor " + n2 +" é o menor. ");
    alert("A soma dos maiores valores é: " + (n1+n3));
}else{
    alert("O valor " + n3 +" é o menor. ");
    alert("A soma dos maiores valores é: "+ (n2+n1));
}