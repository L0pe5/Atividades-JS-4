const prompt = require("prompt-sync")();

// array de objetos para classificar o nome, preço e quantidade dos produtos em estoque

const produtos = [
    { nome: "Gabinete:", preco: 120, quantidade: 7 },
    { nome: "Placa mãe:", preco: 340, quantidade: 5 },
    { nome: "Processador:", preco: 790, quantidade: 8 },
    { nome: "SSD NVMe M.2:", preco: 240, quantidade: 4 },
    { nome: "Placa de vídeo:", preco: 1200, quantidade: 6 },
    { nome: "Fonte:", preco: 550, quantidade: 5 },
    { nome: "Fans:", preco: 110, quantidade: 12 },
];

// valor total do Estoque

function calcularValorTotalEstoque() {
    return produtos.reduce((total, produto) => total + produto.preco * produto.quantidade, 0)
}

// Produto com o maior valor

function produtoMaiorValor() {
    const produtoMaisCaro = produtos.reduce((maisCaro, atual) => {
        const valorMaisCaro = maisCaro.preco * maisCaro.quantidade;
        const valorAtual = atual.preco * atual.quantidade;
        return valorAtual > valorMaisCaro ? atual : maisCaro;
    });

    return produtoMaisCaro;
}
// relatorio dos produtos

function relatorioProdutos() {
    return produtos.map(p => `${p.nome} R$${p.preco} x ${p.quantidade} unidades`).join("\n");
}

// Produtos com estoque baixo

function filtrarProdutos() {
    return produtos.filter(p => p.quantidade < 3).map(p => `${p.nome} x ${p.quantidade} unidades`).join("\n");
}

// exportação das funções para o relatorios.js para servir ao techbot.js

module.exports = {
    calcularValorTotalEstoque,
    produtoMaiorValor,
    relatorioProdutos,
    filtrarProdutos
}