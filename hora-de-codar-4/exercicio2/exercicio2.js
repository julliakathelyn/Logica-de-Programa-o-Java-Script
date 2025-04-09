//2
//Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. 

//Verifique se o planeta que o usuário informou está na array e informe ao usuário.

const PLANETAS = ["terra", "marte", "plutão", "vênus", "júpiter", "saturno"];

var planeta = prompt("Digite o nome de um planeta");
planeta = planeta.toLowerCase();

if (PLANETAS.includes(planeta)){
    alert("O planeta " + planeta + " está na lista!");
} else {
    alert("O planeta " + planeta + " NÃO está na lista.");
}