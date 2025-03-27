// 8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

var n1 = parseInt(prompt("Digite o primeiro valor "));

var n2 = parseInt(prompt("Digite o segundo valor "));

var n3 = parseInt(prompt("Digite o terceiro valor "));

var n4 = parseInt(prompt("Digite o quarto valor "));

var soma = 0;

if( n1 >= 0 & n1 <= 10){
    soma = soma + n1
}else{
    alert("O valor digitado é invalido")
}

if( n2 >= 0 & n2 <= 10){
    soma = soma + n2
}else{
    alert("O valor digitado é invalido")
}

if( n3 >= 0 & n3 <= 10){
    soma = soma + n3
}else{
    alert("O valor digitado é invalido")
}

if( n4 >= 0 & n4 <= 10){
    soma = soma + n4
}else{
    alert("O valor digitado é invalido")
}

var media = (n1+n2+n3+n4)/4

if(media >= 5){
    alert("A media é: " + media +" Voce passou no teste")
}else{
    alert("A media é: " + media +" tente novamente")
}