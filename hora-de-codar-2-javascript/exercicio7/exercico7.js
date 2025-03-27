//7. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.  

var n1 = parseInt(prompt("Digite o primeiro valor "));

var n2 = parseInt(prompt("Digite o segundo valor "));

var n3 = parseInt(prompt("Digite o terceiro valor "));

var n4 = parseInt(prompt("Digite o quarto valor "));

var n5 = parseInt(prompt("Digite o quinto valor "));

var n6 = parseInt(prompt("Digite o sexto valor "));

var soma = 0 ;



if(n1 < 72){
    soma = soma + n1
}else{
    alert("primeiro valor é maior que 72 ")
}

if(n2 < 72){
    soma = soma + n2
}else{
    alert("segundo valor é maior que 72 ")
}

if(n3 < 72){
    soma = soma + n3
}else{
    alert("terceiro valor é maior que 72 ")
}

if(n4 < 72){
    soma = soma + n4
}else{
    alert("quarto valor é maior que 72 ")
}

if(n5 < 72){
    soma = soma + n5
}else{
    alert("quinto valor é maior que 72 ")
}

if(n6 < 72){
    soma = soma + n6
}else{
    alert("sexto valor é maior que 72 ")
}

alert("O usuario informou: " + n1+" " + n2+" " + n3+" " + n4+" " + n5+" " + n6+" " );
alert("A soma é: "+soma);