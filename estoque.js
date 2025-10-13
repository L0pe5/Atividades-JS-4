const prompt = require("prompt-sync")();

const produtos = [
    { nome: "Gabinete", preco: 120, quantidade: 7 },
    { nome: "Placa mãe", preco: 340, quantidade: 5 },
    { nome: "Processador", preco: 790, quantidade: 8 },
    { nome: "SSD NVM2", preco: 240, quantidade: 4 },
    { nome: "Placa de vídeo", preco: 1200, quantidade: 6 },
    { nome: "Fonte", preco: 550, quantidade: 5 },
    { nome: "Fans", preco: 110, quantidade: 12 },
];

// valor total do Estoque

let valorTotalEstoque = produtos.reduce((total, produto) => {
    return total + produto.preco * produto.quantidade;
}, 0);

// Produto com o maior valor

const produtoMaiorValor = produtos.reduce((maisCaro, atual) => {
    const valorMaisCaro = maisCaro.preco * maisCaro.quantidade;
    const valorAtual = atual.preco * atual.quantidade;
    return valorAtual > valorMaisCaro ? atual : maisCaro;
});

const maiorValor = produtoMaiorValor.preco * produtoMaiorValor.quantidade;

// relatorio dos produtos

const relatorioProdutos = produtos.map((produto) => `- ${produto.nome}: R$${produto.preco} x ${produto.quantidade} unidades`).join("\n");

// Produtos com estoque baixo

const filtrarProdutos = produtos.filter((produto) => produto.quantidade < 3).map((produto) => `- ${produto.nome} (apenas ${produto.quantidade} unidades)`).join("\n");

// exibição

console.log("------|| RELATÓRIO DO ESTOQUE ||------");
console.log(`Produtos Cadastrados:\n ${relatorioProdutos}`);
console.log(`Valor Total do Estoque: R$${valorTotalEstoque}`);
console.log(`Produto com maior valor acumulado: ${produtoMaiorValor.nome} (R$${maiorValor})`);

console.log("------|| ALERTA PARA REPOSIÇÃO ||------")
console.log(filtrarProdutos.length > 0 ? filtrarProdutos : "Nenhum produto para repor");