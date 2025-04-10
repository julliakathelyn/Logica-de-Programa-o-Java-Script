//3Vamos criar uma lista de compras. 

//Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.

//Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". 

//Peça novamente para o usuário digitar o nome de uma fruta para ser removida. 

//Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". 

//Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".

const FRUTAS = ["maça","banana","uva","pera"];

alert(FRUTAS);
while (FRUTAS.length > 0) {
var frutaUsuario = prompt("Digite o nome de uma das frutas");

if(FRUTAS.includes(frutaUsuario)){
    FRUTAS.splice(FRUTAS.indexOf(frutaUsuario), 1);
    alert("A Fruta foi retirada da lista.");
}else{
    alert("Fruta indisponível no nosso mercado");
}

if(FRUTAS.length > 0 ){
    alert("Frutas restantes:\n" + FRUTAS.join("\n"));
}else{
    alert("Lista de compras finalizada.");
}

}




