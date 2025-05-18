// // Exercicio 1

// let idade = 17;

// if (idade >= 18) {
//   console.log("Pode dirigir.");
// } else {
//   console.log("Ainda não pode dirigir.");
// }

// exercicio 2

// let notaFinal = 75;

// if (notaFinal >= 90) {
//   console.log("Aprovado com excelência.");
// } else if (notaFinal >= 60) {
//   console.log("Aprovado.");
// } else {
//   console.log("Reprovado.");
// }

//Com prompt

// Solicita a nota do usuário
// let notaFinal = Number(prompt("Digite sua nota final:"));

// Verifica a situação do aluno
// if (notaFinal >= 90) {
//   alert("Aprovado com excelência.");
// } else if (notaFinal >= 60) {
//   alert("Aprovado.");
// } else {
//   alert("Reprovado.");
// }

// Solicita a idade do usuário
// let idade = Number(prompt("Digite sua idade:"));

// // Verifica se é maior ou menor de idade
// if (idade >= 18) {
//   alert("Maior de idade");
// } else {
//   console.log("Menor de idade");
// }

// Solicita o nome do usuário
//  let nomeDoUsuario = prompt("Qual é o seu nome?");

// // // Solicita a idade do usuário e converte para número
//  let idade = Number(prompt("Qual é a sua idade?"));

// // // Verifica se é maior de idade
//  if (idade >= 18) {
//    alert(`Olá, ${nomeDoUsuario}! Você pode dirigir.`);
// } else {
//   alert(`Olá, ${nomeDoUsuario}! Você não pode dirigir.`);
// }

// // Solicita a temperatura atual ao usuário
//  let temperatura = Number(prompt("Digite a temperatura local atual:"));

// // // Verifica a classificação da temperatura
//  if (temperatura > 35) {
//   alert("Calor extremo.");
// } else if (temperatura >= 25 && temperatura <= 35) {
//   alert("Clima quente.");
//  } else if (temperatura >= 15 && temperatura <= 24) {
//   alert("Clima agradável.");
// } else if (temperatura >= 5 && temperatura <= 14) {
//   alert("Clima frio.");
//  } else {
//    alert("Frio intenso.");
// }

//Ternário com operadores lógicos
// const idade = 18;
// const podeEntrar = idade >= 18 ? "pode entrar" : "não pode entrar";
// console.log(podeEntrar);

// let podeEntrar;
// // colocar a função somente depois 
// const idade = 17;
// if (idade >= 18) {
//   podeEntrar = "pode entrar";
// } else {
//   podeEntrar = "não pode entrar";
// }
// console.log(podeEntrar);

// Ternário com operadores lógicos
// let nota = 85;

// let resultado = nota >= 90 ? "Execelente" : nota >= 70 ? "Bom" : nota >= 60 ? "Regular" : "Reprovado";

// console.log(resultado);

//mesma logica de cima usando if else

// let idade = 61; 

// let myStatus;

// if (idade >=18) {
//   if (idade < 60){
//     myStatus = "Adulto";
//   } else {
//     myStatus = "Idoso";
//   }
// } else {
//   myStatus = "Menor";
// }

// console.log(myStatus);

// Código: Par ou Ímpar com operador ternário

// // Solicita um número ao usuário
// let numero = Number(prompt("Digite um número:"));

// // Usa operador ternário para verificar se é par ou ímpar
// let resultado = numero % 2 === 0 ? "par" : "ímpar";

// // Exibe o resultado com alert
// alert(`O número ${numero} é ${resultado}.`);


// Solicita um número ao usuário
// let numero = Number(prompt("Digite um número:"));

// let resultado;

// // Verifica se o número é par ou ímpar
// if (numero % 2 === 0) {
//   resultado = "par";
// } else {
//   resultado = "ímpar";
// }

// // Exibe o resultado com alert
// alert(`O número ${numero} é ${resultado}.`);

// swittch

// let cor = 'verde';

// switch (cor) {
//   case 'vermelho':
//     console.log ('Pare');
//     break;
//   case 'amarelo':
//     console.log ('Atenção');
//     break;
//   case 'verde':
//     console.log ('Pode passar');
//     break;
//   default:
//     console.log ('Cor inválida');
//     break;
// }

// let cor = "vermelho";

// switch (cor) {
//   case "vermelho":
//     console.log("Atenção!");
//   case "amarelo":
//     console.log("Alerta!");
//   case "verde":
//     console.log("Siga!");
// }

// Simulando a entrada do usuário (pode ser trocado por prompt no navegador)
// let opcao = 3;

// Crie om programa que simula um menu bancario 

// const opcao = 2; // ou qualquer valor entre 1 e 4, ou até uma entrada do usuário

// switch (opcao) {
//   case 1:
//     console.log("Você escolheu: Saque");
//     break;
//   case 2:
//     console.log("Você escolheu: Transferência");
//     break;
//   case 3:
//     console.log("Você escolheu: Saldo");
//     break;
//   case 4:
//     console.log("Você escolheu: Extrato");
//     break;
//   default:
//     console.log("Opção inválida. Tente novamente.");
// }

// Versão para navegador (com prompt):

// let opcao = Number(prompt("Escolha uma operação:\n1- Saque\n2- Transferência\n3- Saldo\n4- Extrato"));

// switch (opcao) {
//   case 1:
//     alert("Você escolheu: Saque");
//     break;
//   case 2:
//     alert("Você escolheu: Transferência");
//     break;
//   case 3:
//     alert("Você escolheu: Saldo");
//     break;
//   case 4:
//     alert("Você escolheu: Extrato");
//     break;
//   default:
//     alert("Opção inválida. Tente novamente.");
// }

// For

// for (let index = 0; index <=5; index++) {
//   console.log(`Iteração: ${index}`);
// }


// for (let index = 10; index >= 1; index--) {
//   console.log(`Iteração: ${index}`);
// }

// Exercicios com for 10 PASSOS

// Explicação:
// O for vai de 1 até 10.

// for (let i = 1; i <= 10; i++) {
//   console.log("Passo " + i);
// }
//------------------------------

// Exercicios com for 20 PASSOS
// for (let i = 2; i <= 20; i += 2) {
//   console.log(`Passo ${i}`);
// }


//implmiir numeors impares com for
// O if verifica se o número é ímpar com i % 2 !== 0.
// Se for verdadeiro, ele é impresso com console.log.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// O operador !== verifica se dois valores 
// não são iguais, considerando também o tipo deles (string, número, booleano etc.).

// Versão para Node.js

// let numero = 7;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${numero} x ${i} = ${numero * i}`);
// }


// tabuada prompt
// let numero = Number(prompt("Digite um número para ver a tabuada:"));

// for (let i = 1; i <= 10; i++) {
//   console.log(`${numero} x ${i} = ${numero * i}`);
// }

//------------------------------------------------------------------------------------------
// // Exemplo com alert():

// let numero = Number(prompt("Digite um número para ver a tabuada:"));

// let tabuada = ""; // string acumuladora

// for (let i = 1; i <= 10; i++) {
//   tabuada += `${numero} x ${i} = ${numero * i}\n`; // adiciona cada linha com quebra
// }

// alert(tabuada);

//-------------------------------------------------------------------------------------------

// alert(tabuada); // mostra tudo de uma vez

// tabuada += → acumula cada linha na variável.

// \n → quebra de linha (nova linha) para organizar o texto.

// alert(tabuada) → exibe a tabuada completa em uma janela só.

//----------------------------------------------------------------------------------------------

// let contador = 0;

// while (contador <= 5) {
//   console.log("Passo " + contador);
//   contador++; // incrementa o valor
// }

//--------------------------------------------------------------------------------------------

// let contador = 0;

// while (contador <= 5) {
//   console.log(`Passo  + ${contador}`);
//   contador++; // incrementa o valor
// }

//--------------------------------------------------------------------------------------------

// let senha = Number(prompt("Digite sua senha:"));

// while (senha !== 1234) {
//   senha = Number(prompt("Senha inválida. Tente novamente:"));
// }

// alert("Acesso concedido.");

//--------------------------------------------------------------------------------------------

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

//--------------------------------------------------------------------------------------------

// exercicio 1
// O que faz
// let i = 10	Começa no 10 (valor inicial)
// i >= 1	Continua enquanto i for maior ou igual a 1
// i--	Decrementa i (diminui 1 a cada passo)

//--------------------------------------------------------------------------------------------

// exercicio 2
// let palavra = prompt("Digite uma palavra:");

// for (let i = 1; i <= 5; i++) {
//   console.log(`(${i}) ${palavra}`);
// }

//--------------------------------------------------------------------------------------------

// complemento do exercicio 2

// let palavra = prompt("Digite uma palavra:");
// let resultado = "";

// for (let i = 1; i <= 5; i++) {
//   resultado += `${i} - ${palavra}\n`;
// }
// alert(resultado);

//--------------------------------------------------------------------------------------------

// 🟢 Linha 1:
// let palavra = prompt("Digite uma palavra:");
// Abre uma caixa de entrada (prompt) para o usuário digitar algo.

// O que o usuário digitar será guardado na variável palavra.

// Exemplo: se ele digitar "olá", palavra agora vale "olá".

// 🟢 Linha 2:
// let resultado = "";
// Cria uma variável do tipo texto (string) que começa vazia.

// Essa variável será usada para acumular (juntar) as repetições da palavra.

// 🟢 Bloco for:
// for (let i = 1; i <= 5; i++) {
//   resultado += `${i} - ${palavra}\n`;
// }
// let i = 1 → o contador começa no 1.

// i <= 5 → repete enquanto i for menor ou igual a 5.

// i++ → após cada repetição, aumenta 1 no valor de i.

// Dentro do laço:
// resultado += `${i} - ${palavra}\n`;
// Isso junta na variável resultado uma nova linha com:

// o número da repetição: ${i}

// a palavra digitada: ${palavra}

// e \n → que serve para pular linha no resultado.

// 🟢 Depois do for:
// alert(resultado);
// Mostra tudo o que foi acumulado em resultado numa caixa de alerta.

// Isso inclui 5 linhas com a palavra digitada, numeradas de 1 a 5.

//--------------------------------------------------------------------------------------------

// exercicio 3 

// let numero = Number(prompt("Digite um número acima de 4:"));

// while (numero > 0) {
//   if (numero % 2 === 0) {
//     console.log(`Número par: ${numero}`);
//   } else {
//     console.log(`Número ímpar: ${numero}`);
//   }
//   numero--; // decrementa 1 a cada volta
// }

// console.log("Chegou ao zero!");

//--------------------------------------------------------------------------------------------

// Linha	O que faz
// prompt(...)	Pede ao usuário um número.
// Number(...)	Converte o texto digitado para número.
// while (numero > 0)	Executa enquanto o número for maior que 0.
// if (numero % 2 === 0)	Verifica se o número é par (resto da divisão por 2 é 0).
// else	Caso contrário, é ímpar.
// numero--	Diminui o valor da variável em 1 a cada volta.
// console.log("Chegou ao zero!")	Mostra a mensagem final quando termina.

//--------------------------------------------------------------------------------------------
//Exercicio do while

// let numero;
// do {
//   numero = prompt("Digite um número maior que 10:");
// } while (numero <= 10);

// alert("Número maior que 10.");

//--------------------------------------------------------------------------------------------


// let palavra = prompt("Digite uma palavra (ou 'sair' para encerrar):");

// while (palavra !== "sair") {
//     palavra = prompt("Digite outra palavra (ou 'sair' para encerrar):");
//   }
  
//   alert("Programa encerrado.");

  //--------------------------------------------------------------------------------------------

  // no console
  // let palavra = prompt("Digite uma palavra (ou 'sair' para encerrar):");
  
  // while (palavra !== "sair") {
  //   console.log(`Você digitou: ${palavra}`);
  //   palavra = prompt("Digite outra palavra (ou 'sair' para encerrar):");
  // }
  
  // console.log("Programa encerrado.");

   //--------------------------------------------------------------------------------------------


//   let numero = Number(prompt("Digite um número (0 para sair):"));

// while (numero !== 0) {
//   if (numero > 0) {
//     console.log(`Número positivo: ${numero}`);
//   } else {
//     console.log(`Número negativo: ${numero}`);
//   }

//   numero = Number(prompt("Digite outro número (0 para sair):"));
// }

// console.log("Zero não é positivo, nem negativo.");


//Dado um array de números fixo, use um for para somar todos os valores e exibir o resultado final.
//Crie um array com 5 palavras. Use um for para mostrar cada palavra junto com sua posição no array.
//Crie uma função calcularMedia que recebe um array de números e retorna a média dos valores.
//Crie uma função contarVogais(palavra) que recebe uma palavra e conta quantas vogais ela tem.


