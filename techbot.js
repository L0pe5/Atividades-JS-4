const prompt = require("prompt-sync")();

switch(opcao) {
    case '1': acao1(); break;
    case '2': acao2(); break;
    case '3': sair(); break;
}

function mostrarMenu() {
    console.log("🤖 Tech BOT 💻 ✮⋆˙");
    console.log("1 - Limpar Casa");
    console.log("2 - Desligar a luz");
    console.log("3 - Ligar o Carro");

    const opcao = prompt("Escolha uma das opções: ")
}