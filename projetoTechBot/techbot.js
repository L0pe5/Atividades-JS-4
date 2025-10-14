const prompt = require("prompt-sync")();
const cadastro = require("./cadastro");
const relatorios = require("./estoque/relatorios");
const estoque = require("./estoque/estoque");

function monstrarMenu() {
    console.log("------|| TechBot Menu ||------");
    console.log("1 - Iniciar cadastro");
    console.log("2 - Verificar valor total do estoque");
    console.log("3 - Relatório completo do estoque");
    console.log("0 - Sair");
}

let opcao;
do {
    monstrarMenu();
    opcao = prompt("Escolha uma das opções: ").trim()
    switch (opcao) {
        case '1':
            console.log("Iniciando cadastro..."),"\n", cadastro.realizarCadastro();
            break;
        case '2':
            console.log(`Valor total do estoque: R$${estoque.calcularValorTotalEstoque()}`);
            break;
        case '3':
            relatorios.RelatorioCompleto();
            break;
        case '0':
            console.log("TechBot Desligando..."), "\n", console.log("Desligado com sucesso!");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
} while (opcao !== '0')