const prompt = require("prompt-sync")(); 

const nome = "admin"
const senha = "admin123"
const cargo = "gerente"

let usuario = prompt("Digite seu nome de usuário: ").toLowerCase();
let password = prompt("Digite sua senha: ").toLowerCase();
let userCargo = prompt("Digite seu cargo: ")

if (userCargo !== cargo) {
    console.log("Acesso negado. Cargo inválido.");
    process.exit(); 
}


if (usuario === nome && password === senha) {
    console.log("Login bem-sucedido! Bem-vindo, " + usuario + "!");
}else {
    console.log("Usuário ou senha incorretos. Tente novamente.");
}