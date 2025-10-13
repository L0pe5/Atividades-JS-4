const prompt = require("prompt-sync")(); 


let nome = prompt("Qual seu nome ? ")
let idade = Number(prompt("Qual sua idade ? "))
let emprego = prompt(" Você esta empregado ? (sim/nao) ")
let aposentadoria = 65 - idade

if (emprego === "sim") {
    emprego = "está empregado "
} else if (emprego === "nao") {
emprego = "não está empregado , mas continue tentando !"} 
else {
    console.log(" Resposta inválida ! ")
}



console.log("Bem-vindo , " + nome + " ! Você tem " + idade + " anos e " + emprego );
console.log("Faltam " + aposentadoria + " anos para você se aposentar ! ");