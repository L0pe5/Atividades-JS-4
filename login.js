const prompt = require('prompt-sync')();

const usuarios = [
    { nome: "admin", senha: "1234", cargo: "Gerente" },
    { nome: "joao", senha: "abcd", cargo: "Funcionário" },
];

let inserirNome = prompt("Digite seu nome: ").trim().toLowerCase();
let inserirSenha = prompt("Digite sua senha: ", { echo: '*' }).trim().toLowerCase();

const usuario = usuarios.find(u => u.nome === inserirNome && u.senha === inserirSenha)

if (usuario) {
    if (usuario.cargo === "Gerente") {
        console.log("Acesso total liberado")
    }
    else {
        console.log("Acesso restrito")
    }
}
else {
    console.log("Acesso negado")
}