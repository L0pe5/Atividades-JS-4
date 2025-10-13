const prompt = require('prompt-sync')();

let = valorInicial = parseFloat(prompt("Digite o valor inicial: "));
let = taxa = parseFloat(prompt("Digite a taxa em porcentagem: ")) / 100;
let = tempo = parseFloat(prompt("Digite o tempo em meses: "));

const jurosSimples = valorInicial * (1 + taxa * tempo);
const jurosComposto = valorInicial * (1 + taxa) ** tempo;

console.log(`Juros simples avaliado em: ${jurosSimples.toFixed(2)}`);
console.log(`Juros Composto avaliado em: ${jurosComposto.toFixed(2)}`);

if (jurosSimples && jurosComposto >= 1000) {
    console.log("seu rendimento ultrapassou R$1000.00, excelente investimento!")
}