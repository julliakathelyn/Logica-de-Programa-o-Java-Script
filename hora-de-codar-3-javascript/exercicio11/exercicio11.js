// 11 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

var n1 = parseInt(prompt("Digite até qual numero deseja"));
var x;
var y; 

for(x = 1; x <= n1; x++){
    console.log("Tabuada  do " + x );


for(y=1; y <= 10; y++){
    console.log(x+ "x" +  y + "=" + x*y )
}
}