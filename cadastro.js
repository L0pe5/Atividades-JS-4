const prompt = require('prompt-sync')({ sigint: true });

console.log("Sistema de Cadastro de Usuário");

const nome =  prompt('Qual é o seu nome? ')
const idade = Number(prompt(`${nome}, você tem quantos anos? `))
const trabalho = prompt("Você está trabalhando? ").toLowerCase();

/* validar os tipos dos dados */
let express_reg_texto = "/^[^0-9]*$/"
let express_reg_numero = "/^[+-]?\d+(\d+).\?$/"

function IsValidarTipoDado(texto,numero,booleano = true){
    let texto_valido = ""
    if (texto === express_reg_texto && numero !== express_reg_numero && typeof booleano !== "boolean") {
        texto_valido = "Dados inválidos";
    } else {
        texto_valido = "Dados válidos";
    }
    return texto_valido
}
const validar_dados = IsValidarTipoDado(nome, idade);

/* processamento do dado trabalho */
const trabalha_sem_acentos = trabalho.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const profissao = trabalho.replace("sim,", "");

/* retorno */
if (validar_dados === "Dados inválidos") {
    console.log("Encerrando o programa por dados inválidos...");
    process.exit(1);
}else if (trabalha_sem_acentos.includes("nao")) {
    console.log(`você ainda não está empregada, mas continue tentando.`);
} else if (trabalha_sem_acentos.includes("sim")) {
    console.log(`Bem-vindo, ${nome}! Você tem ${idade} anos e é ${profissao}.`);
}else{
    console.log('erro no programa, não respondeu com sim ou não')
}
