var saldo = 100.0;
var senha = 3589;
var nome = prompt("insira seu nome");
    
    alert("Olá " + nome + ", é uma prazer ter você aqui!");

function inicio() {

    var escolha = parseInt(prompt('Selecione uma opção (1. Saldo) (2. Extrato) (3. Saque) (4. Depósito) (5. Transferência) (6. Sair)'));

    switch (escolha) {
        case 1:
            ver_saldo();
            break
        case 2:
            ver_extrato();
            break
        case 3:
            fazer_saque();
            break
        case 4:
            fazer_deposito();
            break
        case 5:
            fazer_transferencia();
            break
        case 6:
            sair();
            break
        default:
            erro();
            break

    }
}

function ver_saldo() {
    pedir_senha();
    alert('Seu saldo atual é: ' + saldo);
    inicio();
}

function ver_extrato() {
    pedir_senha();
    alert("EXTRATO MENSAL \n \n (12/09/21) Padaria do Seu Zé - R$20,00 \n (13/09/21) SexShop Maria Helena - R$49,99 \n (14/09/21) Açougue Lucas Carnes - R$39,99");
    inicio();
}

function fazer_saque() {
    var saque = parseFloat(prompt('Qual o valor para saque?'));
    pedir_senha();
    if (isNaN(saque) || saque === '') {
        alert('Por favor, informe um número:');
        fazer_saque();
    }
    else if (saque > saldo) {
        alert("Operação não autorizada.");
        fazer_saque();
    }
    else if (saque <= 0) {
        alert("Operação não autorizada.");
        fazer_saque();
    } else {
        saldo -= saque;
        ver_saldo();
    }
}

function fazer_deposito() {
    var deposito = parseFloat(prompt('Qual o valor para depósito?'));
    pedir_senha();
    if (isNaN(deposito) || deposito === '') {
        alert('Por favor, informe um número:');
        fazer_deposito();
    }
    else if (deposito <= 0) {
        alert("Operação não autorizada.");
        fazer_deposito();
    } else {
        saldo += deposito;
        ver_saldo();
    }
}

function fazer_transferencia() {
    var conta = Number(prompt("Digite o número da conta para transferência"));
    pedir_senha();
    if (isNaN(conta) || conta === "") {
        alert('Por favor, informe um número:');
        fazer_transferencia();
    }
    var transferencia = parseInt(prompt("Digite o valor para transferência"));
    while (isNaN(transferencia) || transferencia === "") {
        alert('Por favor, informe um número:');
    }
    if (transferencia > saldo) {
        alert("Operação não autorizada.");
    }
    else if (transferencia <= 0) {
        alert("Operação não autorizada.");
    } else {
        saldo -= transferencia;
        alert("Transferiu R$" + transferencia + " reais para a conta: " + conta);
    }
}

function pedir_senha() {
    var senhaUsuario = Number(prompt("Digite sua senha"));
    if (senhaUsuario === senha) {
        alert("Senha correta");
    } else {
        alert("Senha incorreta");
        senha();
    }
}

function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert("Agradecemos por utilizar os serviços do banco " + nome + ", foi um prazer ter você por aqui!");
        window.close();
    } else {
        inicio();
    }
}

inicio();