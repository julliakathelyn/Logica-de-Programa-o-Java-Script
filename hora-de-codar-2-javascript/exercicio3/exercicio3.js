//3. Faça um programa para ler 3 valores (considere que não serão informados 
// valores iguais) e escrever o maior deles.

var n1 = parseInt(prompt("Digite o primeiro valor: "));
var n2 = parseInt(prompt("Digite o segundo valor: "));
var n3 = parseInt(prompt("Digite o terceiro valor: "));

if(n1 > n2 & n1 > n3){
    alert("O primeiro valor é o maior! " + n1)
}else if(n2 > n1 & n2 > n3){
    alert("O segundo valor é o maior! "+ n2)
}else{
    alert("O terceiro valor é o maior! " + n3)
}