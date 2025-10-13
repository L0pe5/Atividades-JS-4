# Atividades-JS-4

# titulo = "Treinamento Integrado de Lógica + Node.js"
### conteudo = """
## 📘 Contexto Geral:
Você é um desenvolvedor contratado para criar sistemas internos de terminal para uma empresa fictícia chamada TechLabs, que quer automatizar tarefas simples no ambiente Node.js.

Cada sistema é uma entrega diferente — mas todos compartilham a mesma base de lógica, variáveis, operadores e condicionais.

─────────────────────────────
###🔹 Projeto 1 — Sistema de Cadastro de Usuário (nível: iniciante)
🎯 Objetivo:
### Treinar variáveis, tipos de dados, operadores de comparação e condicionais.

### 🧩 Descrição:
Crie um script cadastro.js que:
### 1. Solicite via terminal:
   - Nome (string)
   - Idade (number)
   - Está empregado? (boolean)
### 2. Valide os tipos de dados (ex: idade deve ser número).
### 3. Exiba mensagens personalizadas:
   - “Bem-vindo, João! Você tem 25 anos e está empregado.”
   - “Olá, Maria! Você ainda não está empregada, mas continue tentando.”
### 4. Use if/else, operadores lógicos e interpolação de strings.

💡 Extra:
Calcule quantos anos faltam para a aposentadoria (ex: 60 - idade).

─────────────────────────────
###🔹 Projeto 2 — Calculadora Financeira (nível: intermediário)
🎯 Objetivo:
Consolidar operadores, condicionais e manipulação de números.

🧩 Descrição:
Crie financas.js que simule o cálculo de juros simples e compostos.
### 1. Peça:
   - Valor inicial
   - Taxa (%)
   - Tempo (meses)
   - Tipo de cálculo (simples ou composto)
### 2. Use if ou switch para decidir qual fórmula aplicar:
   - Juros simples: valor * (1 + taxa * tempo)
   - Juros compostos: valor * (1 + taxa) ** tempo
### 3. Exiba o resultado formatado com duas casas decimais.

💡 Extra:
Crie um bônus: se o rendimento ultrapassar R$ 1000, exiba "Excelente investimento!".

─────────────────────────────
###🔹 Projeto 3 — Central de Login (nível: intermediário)
🎯 Objetivo:
Usar condicionais aninhadas e operadores lógicos.

🧩 Descrição:
Crie login.js que simula o sistema de autenticação da empresa:
### 1. O programa tem usuários fixos:
   const usuarios = [
     { nome: "admin", senha: "1234", cargo: "Gerente" },
     { nome: "joao", senha: "abcd", cargo: "Funcionário" },
   ];
### 2. Peça nome e senha pelo terminal.
### 3. Valide credenciais e exiba mensagens personalizadas.
### 4. Diferencie permissões:
   - Gerente → “Acesso total liberado.”
   - Funcionário → “Acesso restrito.”

💡 Extra:
Use toLowerCase() para ignorar maiúsculas/minúsculas no login.

─────────────────────────────
###🔹 Projeto 4 — Gerador de Relatórios de Estoque (nível: intermediário-avançado)
🎯 Objetivo:
Combinar lógica, arrays, loops e condicionais com Node.

🧩 Descrição:
Crie estoque.js para uma loja que controla seus produtos.
### 1. Tenha um array de produtos.
### 2. Calcule e exiba:
   - Valor total do estoque.
   - Produto com maior valor acumulado.
### 3. Mostre relatórios bem formatados.

💡 Extra:
Permita filtrar produtos com quantidade < 3 (alerta de reposição).

─────────────────────────────
###🔹 Projeto 5 — Assistente de Terminal “TechBot” (nível: avançado)
🎯 Objetivo:
Integrar tudo — lógica, operadores, condicionais e fluxo de controle no Node.js.

🧩 Descrição:
Crie techbot.js, um chatbot de linha de comando da empresa.
### 1. Mostra o menu principal com opções.
### 2. Use switch/case para direcionar as ações.
### 3. Cada opção chama uma função interna (reaproveite códigos anteriores).
### 4. O sistema continua em loop até o usuário sair.

💡 Extra:
Use módulos (require e module.exports) para organizar o código em múltiplos arquivos.
"""
