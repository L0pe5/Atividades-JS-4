const prompt = require('prompt-sync')();

// lista de usuários com, nome, senha e cargo, tratado como array de objetos

const usuarios = [
    { nome: "admin", senha: "1234", cargo: "Gerente" },
    { nome: "joao", senha: "abcd", cargo: "Funcionário" },
];

// entrada de dados do usuário

let inserirNome = prompt("Digite seu nome: ").trim().toLowerCase();
let inserirSenha = prompt("Digite sua senha: ", { echo: '*' }).trim().toLowerCase();

// verificação de credênciais, procurando na lista de usuários

const usuario = usuarios.find(u => u.nome === inserirNome && u.senha === inserirSenha)

// Estrutura de condição para analisar o cargo do usuário e liberar acesso total, restrito ou negar acesso.

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