/* 
Projeto 4 — Gerador de Relatórios de Estoque (nível: intermediário-avançado) 🎯 Objetivo: Combinar lógica, arrays, loops e condicionais com Node.

🧩 Descrição: Crie estoque.js para uma loja que controla seus produtos.

1. Tenha uma variedade de produtos.
2. Calcule e exiba:
Valor total do estoque.
Produto com maior valor acumulado.
3. Mostrar relatórios bem formatados.
💡 Extra: Permita filtrar produtos com quantidade < 3 (alerta de reposição).
*/
const prompt = require('prompt-sync')({ sigint: true });
console.log(`Estoque`)

const estoque = [
    { nome: "Caneta", preco: 2, quantidade: 10 },
    { nome: "lapis", preco: 5, quantidade: 2 },
    { nome: "apontador", preco: 1.5, quantidade: 1 },
    { nome: "Caderno", preco: 15, quantidade: 3 },
    { nome: "Borracha", preco: 1, quantidade: 20 }
]

let total_estoque = 0
let produto_caro = 0
let info_produto_caro = null
const produto_em_falta = []

estoque.forEach((cada_obj) => {
    // soma de cada objeto e total
   let soma_cada_produto = cada_obj.preco * cada_obj.quantidade 
   total_estoque += soma_cada_produto
   // qual é o produto mais caro
   if(soma_cada_produto > produto_caro){
        produto_caro = soma_cada_produto
        info_produto_caro = cada_obj
   }
   //reposição
   if(cada_obj.quantidade <= 3){
        produto_em_falta.push(cada_obj.nome)
   }
    // formatação da tabela
    console.log(`\nnome           Preço      Qtdd     Total`);
   console.log(`${cada_obj.nome}    |    ${cada_obj.preco}  |    ${cada_obj.quantidade}     |   ${soma_cada_produto}`);
})
console.log(`Valor total do estoque: ${total_estoque}`)
console.log(`Produto mais caro:  ${info_produto_caro.nome}`)
console.log(`Produto sem estoque: ${produto_em_falta}`)