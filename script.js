// Ambiente e Execução do JavaScript

// Passo a passo:
// Abra o navegador (Chrome, Firefox, etc.)
// Pressione F12 ou clique com o botão direito → "Inspecionar"
// Vá até a aba "Console"
// Digite seu código JavaScript e aperte Enter

// const nome = "Maria";
// console.log("Olá, " + nome);

// Passo a passo:
// Abra o terminal ou prompt de comando
// Crie um arquivo, por exemplo: teste.js
// Dentro do arquivo teste.js, escreva:

// const nome1 = "João";
// console.log("Bem-vindo, " + nome1);

// ----------------------------------------------


// let idade = 20;

// if (idade >= 18) {
//   console.log("É maior de idade.");
//   console.log("Pode tirar a carteira de motorista.");
// }

// boolean
// let ligado = true;

// if (ligado) {
//   console.log("A luz está ligada!");
// } else {
//   console.log("A luz está desligada.");
// }

//Resposta seria 

// let nome = "Joaquim";
// console.log(nome); // Resultado: Joaquim

// let nome;
// console.log(nome); // Resultado: undefined


//Objeto com propriedades

// console.log(pessoa.nome);       // Ana
// console.log(pessoa.idade);      // 30
// console.log(pessoa.profissao);  // Engenheira


// let pessoa = {
//   nome: "Ana",
//   idade: 30,
//   profissao: "Engenheira"
// };

// console.log(pessoa.nome);


// Array
// começa contar do zero

// let frutas = ["banana", "maca", "pera"];
//  console.log(frutas[0]); // Resultado: banana

// Funções
// function saudacao(nome) {
//   console.log("Olá, " + nome);
// }
// saudacao("Lucas");

// prompt

// // Passo 1: pedir o nome
// let nome = prompt("Qual é o seu nome?");

// // Passo 2: pedir a idade
// let idade = prompt("Quantos anos você tem?");

// // Passo 3: mostrar a mensagem
// alert(`Olá, ${nome}! Você tem ${idade} anos.`);

// confirm()

// let resposta = confirm("Você tem certeza que deseja sair?");
// console.log(resposta);

// Exercício1

// let a = 10;
// let b = 20;

// console.log("Antes da troca:");
// console.log("a =", a); // 10
// console.log("b =", b); // 20

// // Fazendo a troca
// let temp = a;
// a = b;
// b = temp;

// console.log("Depois da troca:");
// console.log("a =", a); // 20
// console.log("b =", b); // 10


// Exercício2
// Solicita o nome e a profissão do usuário
// const nomeDoUsuario = prompt("Qual é o seu nome?");
//   const profissaoDoUsuario = prompt("Qual é a sua profissão?");

// // Exibe a mensagem com interpolação
// alert(`Olá, ${nomeDoUsuario}! Que interessante saber que você trabalha como ${profissaoDoUsuario}.`);