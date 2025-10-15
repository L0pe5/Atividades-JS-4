/* 
Projeto 2 — Calculadora Financeira (nível: intermediário) 
🎯 Objetivo: Consolidar operadores, condicionais e manipulação de números.

🧩 Descrição: Crie financas.js que simula o cálculo de juros simples e compostos.

1. Peça:
Valor inicial
Taxa (%)
Tempo (meses)
Tipo de cálculo (simples ou composto)

2. Use if ou switch para decidir qual fórmula aplicar:
Juros simples: valor * (1 + táxons * tempo)
Juros compostos: valor * (1 + taxa) ** tempo

3. Exiba o resultado formatado com duas casas decimais.
💡 Extra: Crie um bônus: se o rendimento ultrapassar R$ 1000, exiba "Excelente investimento!".
*/

const prompt = require('prompt-sync')({sigint:true})

console.log("cálculo de juros simples e compostos");

const valor = Number(prompt('Valor inicial? '))
//converte para porcentagem
const taxa = Number(prompt('Valor da taxa? ')) / 100
const meses = Number(prompt('Investi por quantos meses? '))
const tipo_calculo = prompt('Qual juros: \n (1) - Juros Simples \n (2) - Juros Composto?\n escolhe: ')
let montante

if(tipo_calculo == 1){//juros simples
    montante = valor * (1 + taxa * meses)
}else if(tipo_calculo == 2){//juros composto
    montante = valor * (1 + taxa) ** meses
}else{
    console.log('Opção invalida!\n Programa Encerrado.')
    process.exit();//encerra o processo com a opção invalida
}
// verifica se tem bonus
let tem_bonus = montante - valor;
if(tem_bonus >= 1000){
    console.log("Excelente investimento!");
}

console.log(`O motante para o valor R$ ${valor} reais, com taxa de ${taxa}% por ${meses} meses será ${montante.toFixed(2)}`)