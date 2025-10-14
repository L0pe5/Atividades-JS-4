const prompt = require('prompt-sync')();

function realizarCadastro() {

    let nome = prompt("Qual o seu nome? ");
    let idade = parseInt(prompt("Quala sua idade? ").trim());
    let estaEmpregado = prompt("Está empregado? ").trim().toLowerCase() === "sim";
    let idadeRestanteAo60 = 60 - idade;

    if (estaEmpregado === true) {
        console.log(`Bem vindo ${nome}! Você tem ${idade} anos e esta empregado!`)
    }
    else if (idade < 60) {
        console.log(`Bem vindo ${nome}! Você tem ${idade} anos e esta desempregado, continue persistindo!`)
    }

    if (idade >= 60) {
        console.log(`Está com a idade preparada para a aposentadoria!`)
    }
    else {
        console.log(`Ainda são necessários ${idadeRestanteAo60} anos para você completar 60 anos de idade.`)
    }
}

module.exports = { realizarCadastro };