
---

# 📘 Aula 03 – Funções em JavaScript

🔗 **Material de apoio (Slides):**
[▶️ Acesse os slides no Google Apresentações da aula-3](https://docs.google.com/presentation/d/1DIeNea0qDYKVe5EScxbt20OSq6OtX0a4/edit?slide=id.p28#slide=id.p28)

---

## 🎯 Objetivo da Aula

Apresentar o conceito de **funções em JavaScript**, abordando:

* Como declarar, chamar e utilizar funções
* Diferença entre parâmetros e argumentos
* Retorno de valores com `return`
* Escopo de variáveis (`local` e `global`)
* Shadowing e Hoisting
* Prática com entrada de dados (`prompt`) e exibição (`alert`, `console.log`)

---

## 🧠 Tópicos Abordados

### 🔹 O que são Funções?

* Blocos de código reutilizáveis.
* Facilitam a organização e modularização do programa.
* Tipos de função:

  * **Declarada**
  * **Anônima**
  * **Arrow Function**

---

### 🔹 Parâmetros vs Argumentos

* **Parâmetro**: nome usado na **declaração** da função.
* **Argumento**: valor real **passado na chamada** da função.

```js
function saudacao(nome) {      // nome = parâmetro
  alert("Olá, " + nome + "!");
}

saudacao("Lucas");             // "Lucas" = argumento
```

---

### 🔹 Retorno com `return`

* O `return` **encerra a função** e pode **devolver um valor**.
* Se `return` não for usado, a função retorna `undefined`.

---

### 🔹 Escopo de Variáveis

* **Local**: variável criada **dentro da função**, só existe lá.
* **Global**: variável criada **fora da função**, acessível em todo o código.

---

### 🔹 Shadowing

* Quando uma **variável local** tem o **mesmo nome de uma global**, a local **"sombreia"** a global.

```js
let nome = "Fora";

function teste() {
  let nome = "Dentro";
  console.log(nome); // Imprime "Dentro"
}
```

---

### 🔹 Hoisting

* Funções **declaradas com `function nome()`** são “içadas” e podem ser chamadas **antes de sua declaração** no código.
* **Funções em `const`, `let` ou `var` não são içadas** com o corpo — resultam em erro se usadas antes.

---

## 🧪 Exercícios Realizados

* ✅ Saudação com `prompt` e `alert` usando função com parâmetro.
* ✅ Criação de função que **retorna mensagem personalizada** com `return`.
* ✅ Uso de `while` em uma função que **decrementa um número até 0**.
* ✅ Comparação de funções com e sem hoisting.
* ✅ Prática com escopo e shadowing.
* ✅ Funções anônimas e arrow functions explicadas com exemplos.

---

## ✅ Conclusão

Essa aula reforçou o papel fundamental das **funções** no JavaScript como forma de **organizar, reutilizar e estruturar** melhor os programas. Também aprofundamos conceitos importantes como **escopo, hoisting e shadowing**, preparando o aluno para aplicar funções de forma lógica, prática e eficiente.

---

Se quiser, posso exportar esse conteúdo em `.md` ou `.pdf`, ou gerar um repositório pronto com esse `README`. Deseja?
