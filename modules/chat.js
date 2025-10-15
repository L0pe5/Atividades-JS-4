/* 
Projeto 5 — Assistente de Terminal “TechBot” (nível: avançado) 🎯 Objetivo: Integrar tudo — lógica, operadores, condicionais e fluxo de controle no Node.js.

🧩 Descrição: Crie techbot.js, um chatbot de linha de comando da empresa.

1. Mostra o menu principal com opções.
2. Use switch/case para direcionar as ações.
3. Cada opção chama uma função interna (reaproveite códigos anteriores).
4. O sistema continua em loop até o usuário sair.
💡 Extra: Use módulos (require e module.exports) para organizar o código em múltiplos arquivos. """
*/
//abrir terminal
import readline from 'readline';

// module.export todos os arquivos
import * as funcoes from './funcao.js';

// criar a fase
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'TechBot> '
});

function perguntar(texto) {
  return new Promise(resolve => {
    rl.question(texto, resposta => resolve(resposta.trim()));
  });
}
//chat
async function chat() {
  let sair = false;

  while (!sair) {
    console.log('\n=== Menu TechBot ===');
    console.log('(1) Data e hora');
    console.log('(0) Sair');

    const opcao = await perguntar('Escolha uma opção: ');

    switch (opcao) {
      case '1':
        funcoes.dataHora();
        break;
      case '0':
        console.log('Saindo do programa...');
        sair = true;
        break;
      default:
        console.log('Opção inválida. Tente novamente.');
    }
  }

  rl.close();
}

chat();
