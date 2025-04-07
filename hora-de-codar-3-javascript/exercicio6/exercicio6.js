// 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.
function inicio() {
    var n1 = parseInt(prompt("Informe a primeira nota"));
    var n2 = parseInt(prompt("Innforme a segunda nota"));

    var media = (n1 + n2) / 2

    if (media > 9.5) {
        alert("Aprovado")
    } else {
        alert("Reprovado")
    }


}

var resposta = parseInt(prompt("Calcular a média de outro aluno Sim(1)/Não(2)?"));


switch (resposta) {
    case 1:
        inicio()
        break;
    case 2:




}