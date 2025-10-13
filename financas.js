const prompt = require("prompt-sync")(); 

let valorInicial = Number(prompt("Qual o valor inicial do investimento? "));
let taxa = Number(prompt("Qual a taxa de juros mensal (%)? ")) / 100; 
let tempo = Number(prompt("Por quantos meses o dinheiro ficará investido? "));
let tipo = prompt("O cálculo será 'simples' ou 'composto'? ").toLowerCase();

let valorFinal;

if (tipo == "simples") {
    valorFinal = valorInicial * (1 + taxa * tempo);
} else if (tipo == "composto") {
    valorFinal = valorInicial * (1 + taxa) ** tempo;
} else {
    console.log("Tipo de cálculo inválido! Digite 'simples' ou 'composto'.");
    process.exit(); 
}

console.log("Resultado:");
console.log("Tipo de cálculo: " + tipo);
console.log("Valor final após " + tempo + " meses: R$ " + valorFinal.toFixed(2));

if (valorFinal - valorInicial > 1000) {
    console.log(" Excelente investimento!");
}
