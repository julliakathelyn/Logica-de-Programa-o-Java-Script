var saldo = 100.5; //Float
var nomeUsuario = prompt("Digite seu nome");

function inicio() {

    //8 Ao acessar o sistema, pergunte o nome do usuário e diga "Olá {Nome} é um prazer ter você por aqui!

    alert("Ola " + nomeUsuario + " é um prazer ter você por aqui")

    menu()

}

function menu() {

    var escolha = parseInt(prompt('Selecione uma opção 1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Transferência 6.) Sair'));

    //8 No menu principal, a ordem das opções deve ser: Saldo, Extrato, Saque, Depósito, Transferência e Sair.


    switch (escolha) {
        case 1:
            ver_saldo()
            break;

        case 2:
            verExtrato()
            break;

        case 3:
            fazer_saque()
            break;
        case 4:
            fazer_deposito()
            break;
        case 5:
            fazerTransferencia()
            break;
        case 6:
            sair()
            break;

        default:
            erro()

    }

}


function ver_saldo() {
    login()
    alert('Seu saldo atual é: ' + saldo);
    inicio();
}
//10 Caso o usuário informe um valor para depósito igual ou menor que zero, não deixe a operação ocorrer. Exiba uma mensagem de "Operação não autorizada".


function fazer_deposito() {
    var deposito = parseFloat(prompt('Qual o valor para depósito?'));
    // Not a Number
    if (isNaN(deposito) || deposito === '' || deposito <= 0) {
        alert('Operação não autorizada');
        fazer_deposito();
    } else {
        saldo += deposito;
        ver_saldo();
    }
}

function fazer_saque() {

    login()
    //Sempre que o usuário for sacar dinheiro, o valor restante não pode ser negativo, ou seja, caso o usuário tente sacar mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada".

    //4. Sempre que o usuário for sacar dinheiro, o valor a ser sacado não pode ser igual ou menor que zero. Exiba uma 
    //mensagem de "Operação não autorizada".


    var saque = parseFloat(prompt('Qual o valor para saque?'));

    //uni dois ifs, com o operador ou 


    if (isNaN(saque) || saque === '' || saque <= 0 || saque > saldo) {
        alert('Operação não autorizada! Por favor, informe um numero valido');
        fazer_saque();
    } else {
        saldo -= saque;

        ver_saldo();
    }

    /*if (saque <= 0) {
        alert("Operação não autorizada! Por favor, informe um numero valido")
        fazer_saque()

    } else if(saque > saldo){
        alert("Operação não autorizada, digite um valor valido")
        fazer_saque()
    }else {
        saldo = saldo - saque
        ver_saldo()
    }*/

}

//9 Atualize a função "erro" com as novas opções do menu.

function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    menu();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert("agradecendo por utilizar os serviços do banco: " + nomeUsuario + " foi um prazer ter você por aqui!")
        window.close();
    } else {
        inicio();
    }
}

//5 Adicionar a opção para ver o extrato (Coloque algumas compras ou depósitos fictícios).

function verExtrato() {
    login()
    alert("25-02-2025   Renner     -199,99 \n" + "15-02-2025   BomBom     -20,00 \n" + "13-01-2025   Mercado    -1300,00 \n" + "04-01-2025   Mesa       -700,00 \n")

}
//6Adicionar a opção para fazer uma transferência. A transferência consiste em você informar o número de uma conta (pode ser qualquer número, mas obrigatoriamente um número, ou seja, nenhum outro caractere deve ser aceito), perguntar o valor da transferência e remover o valor da conta da mesma forma como na ação do saldo. Caso o usuário tente transferir mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada".

//7 Sempre que o usuário for transferir dinheiro,  o valor a ser transferido não pode ser igual ou menor que zero, ou seja, caso o usuário tente transferir mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada".

function fazerTransferencia() {

    login()

    var numConta = parseInt(prompt("Digite o numero da conta"));

    var valorTranferencia = parseInt(prompt("Digite o valor da tranferencia"));

    if (valorTranferencia > saldo || valorTranferencia <= 0) {
        alert("Operação não autorizada");
    } else {
        saldo -= valorTranferencia;
        alert("Transferecia realizazda");
    }

}
//11 Sempre que o usuário for acessar o saldo, sacar, retirar o extrato ou transferir dinheiro é necessário que ele informe uma senha. Essa senha deve ser validada com uma condicional. A senha é 3589.
//12 Caso a senha informada não seja a correta, é necessário chamar a função atual novamente. 
function login() {

    var senha = prompt("Digite sua senha");

    if (senha == 3589) {
        alert("Senha correta")
    } else {
        alert("A senha informada está incorreta! \n")
        login()
    }

}


inicio();