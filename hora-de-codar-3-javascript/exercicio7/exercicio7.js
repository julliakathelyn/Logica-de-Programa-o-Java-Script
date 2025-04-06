//7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
//Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

var n1 = parseFloat(prompt("Digite a primeira nota"));

while (n1 < 0 | n1 > 10){
    n1 = parseFloat(prompt("Digite a primeira nota"));
}

var n2 = parseFloat(prompt("Digite a segunda nota"));

while (n2 < 0 | n2 > 10){
    n2 = parseFloat(prompt("Digite a segunda nota"));
}

var n3 = parseFloat(prompt("Digite a terceira nota"));

while (n3 < 0 | n3 > 10){
    n3 = parseFloat(prompt("Digite a terceira nota"));
}

var n4 = parseFloat(prompt("Digite a quarta nota"));

while (n4 < 0 | n4 > 10){
    n4 = parseFloat(prompt("Digite a quarta nota"));
}

var n5 = parseFloat(prompt("Digite a quinta nota"));

while (n5 < 0 | n5 > 10){
    n5 = parseFloat(prompt("Digite a quinta nota"));
}

var n6 = parseFloat(prompt("Digite a sexta nota"));

while (n6 < 0 | n6 > 10){
    n6 = parseFloat(prompt("Digite a sexta nota"));
}

var media = parseFloat(n1 + n2 + n3 + n4 + n5 + n6 )/6;

alert("A media é " + media);