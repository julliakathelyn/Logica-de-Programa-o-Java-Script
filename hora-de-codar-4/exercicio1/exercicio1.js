//Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles. 

//nome
//idade
//curso


const ESTUDANTES = [];
while (true) {

    var nome = prompt("Digite o nome do aluno");
    if (nome === null || nome.toUpperCase() === "PARE") {
        break;
    }

    var curso = prompt("Digite o curso do aluno");
    if (curso === null || curso.toUpperCase() === "PARE") {
        break;
    }


    var idade = prompt("Digite a idade do aluno");
    if (idade === null || idade.toUpperCase() === "PARE") {
        break;
    }

    ESTUDANTES.push({
        nome: nome,
        curso: curso,
        idade: idade
    });


}

console.log(ESTUDANTES);
