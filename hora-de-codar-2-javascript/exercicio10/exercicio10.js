//10. Tendo como entrada a altura e o gênero designado ao nascer (codificado da seguinte forma: 1: feminino - 2: masculino - ) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas.

var altura = parseFloat(prompt("Digite a altura (ex: 1.70)"));
var genero = parseInt(prompt("Digite seu genero designado ao nascer -> 1: feminino - 2: masculino"));

switch (genero) {
    case 1:
        var femininoPeso = (62.1 * altura) - 44.7
        alert("O seu peso ideal é: " + femininoPeso)
        break

    case 2:
        var masculinoPeso = (72.7 * altura) - 58
        alert("O seu peso ideal é: " + masculinoPeso)
        break
    default:
            alert("Valor invalido, escolha (1 ou 2)");

}