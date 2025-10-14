const prompt = require("prompt-sync")();

// Exportação de funções reutilizadas por outras tarefas para definir ações ao TechBot

const cadastro = require("./cadastro");
const relatorios = require("./estoque/relatorios");
const estoque = require("./estoque/estoque");

// função para mostrar o menu de opções

function monstrarMenu() {
    console.log("------||⋆.˚✮ 🤖 TechBot Menu 💻 ✮˚.⋆ ||------");
    console.log("1 - Iniciar cadastro");
    console.log("2 - Verificar valor total do estoque");
    console.log("3 - Relatório completo do estoque");
    console.log("0 - Sair");
}

// variável para armazenar a opção deicidida pelo usuário

let opcao;

// estrutura de repetição do...while para manter o menu ativo até o usuário digitar a opção de sair

do {
    monstrarMenu();

    // entrada de dados para escolher a opção

    opcao = prompt("Escolha uma das opções: ").trim()

    // estrutura condicional switch/case para executar a ação diante o número que foi digitado pelo usuário

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