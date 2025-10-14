// Requerimento das funções do estoque.js para gerar o relatório

const estoque = require("./estoque");

// função para gerar o relatório completo  do estoque

function RelatorioCompleto() {
    const total = estoque.calcularValorTotalEstoque();
    const maior = estoque.produtoMaiorValor();
    const relatorio = estoque.relatorioProdutos();
    const filtrar = estoque.filtrarProdutos()

    // exibição do relatório no console.log

    console.log("------|| RELATÓRIO DO ESTOQUE ||------");
    console.log(`Produtos Cadastrados:\n ${relatorio}`);
    console.log(`Valor Total do Estoque: R$${total}`);
    console.log(`Produto com maior valor acumulado: ${maior.nome} (R$${maior.preco * maior.quantidade})`);

    console.log("------|| ALERTA PARA REPOSIÇÃO ||------")
    console.log(filtrar.length > 0 ? filtrar : "Nenhum produto para repor");
}

// exportação da função RelatorioCompleto() para o techbot.js

module.exports = { RelatorioCompleto};

