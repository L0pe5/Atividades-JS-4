const estoque = require("./estoque");

function RelatorioCompleto() {
    const total = estoque.calcularValorTotalEstoque();
    const maior = estoque.produtoMaiorValor();
    const relatorio = estoque.relatorioProdutos();
    const filtrar = estoque.filtrarProdutos()

    console.log("------|| RELATÓRIO DO ESTOQUE ||------");
    console.log(`Produtos Cadastrados:\n ${relatorio}`);
    console.log(`Valor Total do Estoque: R$${total}`);
    console.log(`Produto com maior valor acumulado: ${maior.nome} (R$${maior.preco * maior.quantidade})`);

    console.log("------|| ALERTA PARA REPOSIÇÃO ||------")
    console.log(filtrar.length > 0 ? filtrar : "Nenhum produto para repor");
}

module.exports = { RelatorioCompleto};

