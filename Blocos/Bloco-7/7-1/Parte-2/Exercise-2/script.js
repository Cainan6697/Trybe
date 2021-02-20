// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

const phrase = "Antônio foi no banheiro e não sabemos o que aconteceu";

let bigWord = '';

phrase.split(' ').forEach((word) => {
  if (word.length > bigWord.length) {
    bigWord = word;
  }
});

console.log(`A maior palavra da frase é: ${bigWord}`);
