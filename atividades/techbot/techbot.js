
// 1. Importa a biblioteca 'prompt-sync' para ler a entrada do usuário de forma síncrona.
//    O () no final executa a função retornada, permitindo que 'prompt()' seja chamado.
const prompt = require("prompt-sync")();


// 2. Define um objeto 'aplicacoes' para mapear as opções do menu.
//    Ele armazena o nome e o caminho de cada aplicação de forma organizada.
const aplicacoes = {
  // A chave '1' corresponde à opção 1 do menu.
  1: {
    // O nome da aplicação a ser exibido no menu.
    nome: "Cadastro",
    // O caminho relativo para o arquivo da aplicação.
    // O "../" indica para subir um nível na pasta (de 'techbot' para 'atividades').
    caminho: "../cadastro/cadastro.js"
  },
  2: { nome: "Estoque", caminho: "../estoque/estoque.js" },
  3: { nome: "Finanças", caminho: "../financas/financas.js" },
  4: { nome: "Login", caminho: "../login/login.js" },
};


// 3. Define a função que exibe o menu para o usuário.
function exibirMenu() {
  // Imprime uma linha de cabeçalho no console.
  console.log("\n--- Menu de Aplicações ---");
  // Imprime a instrução para o usuário.
  console.log("Escolha uma das opções para executar:");
  // Inicia um loop 'for...in' para percorrer cada chave no objeto 'aplicacoes'.
  for (const key in aplicacoes) {
    // Imprime cada linha do menu, usando o número (key) e o nome da aplicação.
    // Ex: "1. Cadastro", "2. Estoque", etc.
    console.log(`${key}. ${aplicacoes[key].nome}`);
  }
  // Adiciona a opção de sair do programa.
  console.log("5. Sair");
  // Imprime uma linha para fechar o menu visualmente.
  console.log("----------------------");
}

// 4. Define a função principal que controla o fluxo do programa.
function iniciarMenu() {
  // Cria uma variável de controle para o loop, inicializada como verdadeira.
  let rodando = true;

  // Inicia um loop 'while' que continuará executando enquanto 'rodando' for verdadeiro.
  while (rodando) {
    // Chama a função para mostrar o menu.
    exibirMenu();
    // Pede ao usuário para digitar uma opção e armazena a resposta na constante 'escolha'.
    // O programa pausa aqui e espera a entrada do usuário.
    const escolha = prompt("Digite o número da aplicação: ");

    // 5. Inicia uma estrutura condicional para lidar com a escolha do usuário.
    // Verifica se a chave digitada existe no objeto 'aplicacoes' (opções de 1 a 4).
    if (aplicacoes[escolha]) {
      // Se a opção for válida, atribui o objeto correspondente à constante 'app'.
      const app = aplicacoes[escolha];
      // Informa ao usuário qual aplicação está sendo iniciada.
      console.log(`\nIniciando: ${app.nome}`);
      // Usa 'require()' para carregar e EXECUTAR o código do arquivo da aplicação.
      // O programa pula para o arquivo e roda todo o seu conteúdo.
      require(app.caminho);
      // Informa ao usuário que a aplicação terminou, após o código do outro arquivo ser executado.
      console.log("\nAplicação encerrada. Voltando ao menu principal.");
    }
    // 6. Verifica se o usuário digitou "5" para sair.
    else if (escolha === "5") {
      // Mensagem de saída.
      console.log("\nSaindo. Até a próxima!");
      // Define a variável de controle como 'false' para que o loop 'while' termine.
      rodando = false;
    }
    // 7. Se nenhuma das condições acima for verdadeira (opção inválida).
    else {
      // Imprime uma mensagem de erro.
      console.log("\nOpção inválida. Por favor, tente novamente.");
    }

    // 8. Adiciona uma pausa antes de mostrar o menu novamente, se o programa ainda estiver rodando.
    // Isso evita que o menu seja exibido imediatamente após a execução de uma aplicação.
    if (rodando) {
      // Pede ao usuário para pressionar Enter para continuar.
      prompt("\nPressione Enter para continuar...");
    }
  }
}


// chama a função 'iniciarMenu' para começar a execução do programa.
iniciarMenu();