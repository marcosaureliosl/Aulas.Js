
// //Atribuir uma função a uma variável
// const dizerOla = function () {
//   console.log("Olá, mundo!");
// };

// dizerOla(); // Resultado: Olá, mundo!

//------------------------------------------------------

//Passar uma função como argumento

// function executar(funcao) {
//   funcao();
// }

// executar(() => {
//   console.log("Função passada como argumento!");
// });
// // Resultado: Função passada como argumento!

//------------------------------------------------------

//Retornar uma função de outra função

// function criarSaudacao(nome) {
//   return function () {
//     console.log("Olá, " + nome + "!");
//   };
// }

// const saudacaoJoao = criarSaudacao("João");
// saudacaoJoao(); // Resultado: Olá, João!


//------------------------------------------------------

// com return

// function somar(a, b) {
//   return a + b;
// }

// let resultado = somar(3, 4);
// console.log(resultado); // Resultado: 7

//------------------------------------------------------

// sem return

// function mostrarMensagem() {
//    console.log("Oi!");
// }

// let resposta = mostrarMensagem();
// console.log(resposta); // Resultado: undefined

//------------------------------------------------------


//como ficaria se fosse sem o return

// function mostrarMensagem() {
//   return "Oi!";
// }

// let resposta = mostrarMensagem();
// console.log(resposta); // Resultado: Oi!

//------------------------------------------------------

// let mensagem = "Fora";

// function teste() {
//   let mensagem = "Dentro";
//   console.log(mensagem); // Resultado: Dentro
// }

// teste();

//------------------------------------------------------

// function mostrarMensagem(nome) {
//   alert("Olá, " + nome + "! Bem-vindo(a)!");
// }

// const nomeUsuario = prompt("Digite seu nome:");
// mostrarMensagem(nomeUsuario);

// function mostrarMensagem(nome)
// Cria uma função que espera receber um nome.

// alert(...)
// Exibe um aviso com a saudação personalizada.

// prompt("Digite seu nome:")
// Abre uma caixinha para o usuário digitar o nome.
// O valor digitado é guardado na variável nomeUsuario.

// mostrarMensagem(nomeUsuario)
// Chama a função, passando o nome do usuário como argumento.

//------------------------------------------------------


//exercicio
// function decrementar(numero) {
//   while (numero >= 0) {
//     console.log(numero);
//     numero--;
//   }
// }

// const valor = Number(prompt("Digite um número maior ou igual a 10:"));

// if (valor >= 10) {
//   decrementar(valor);
// } else {
//   alert("Número inválido! Digite um valor maior ou igual a 10.");
// }


// prompt(...) → Pergunta ao usuário e guarda a resposta convertida com Number().

// if (valor >= 10) → Verifica se o número é válido.

// decrementar(numero) → Começa do número recebido e diminui 1 a cada volta até chegar a 0.

// console.log(numero) → Mostra o número atual no console.