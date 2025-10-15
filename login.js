/* 
Projeto 3 — Central de Login (nível: intermediário) 
🎯Objetivo: Usar condicionais aninadas e operadores lógicos.

🧩 Descrição: Crie login.js que simula o sistema de autenticação da empresa:

1. O programa tem usuários fixos:
const usuários = [ { nome: "admin", senha: "1234", cargo: "Gerente" }, { nome: "joao", senha: "abcd", cargo: "Funcionário" }, ];

2. Peça nome e senha pelo terminal.
3. Valide credenciais e exiba mensagens personalizadas.
4. Diferencie libera:
Gerente → “Acesso total liberado.”
Funcionário → “Acesso restrito.”
💡 Extra: Use toLowerCase() para ignorar inteligências/minúsculas no login.
*/
const prompt = require('prompt-sync')({ sigint: true });

const usuarios = [ 
    { nome: "admin", senha: "1234", cargo: "Gerente" }, 
    { nome: "joao", senha: "abcd", cargo: "Funcionário" }, 
];

console.log("Central de Login")
const nome_input = prompt("Nome: ").trim().toLowerCase();
const senha_input = prompt("senha: ").trim().toLowerCase();

// busca em cada objeto e compara com o input
const emcontrar = usuarios.find((cada_obj) => {
    if(cada_obj.nome.toLowerCase() === nome_input && cada_obj.senha.toLowerCase() === senha_input){
        return true
    }else{
        return false
    }
})

// comparar os dados com array
    if(emcontrar != undefined){
        if(emcontrar.cargo.toLowerCase() === 'gerente'){
           console.log(`${emcontrar.nome}, você tem acesso de administrador liberado.`);
        }else{
            console.log(`${emcontrar.nome}, seu acesso restrito`);
        }
    }else{
        console.log('Erro de credenciais!')
    }
