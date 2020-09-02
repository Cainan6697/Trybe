// 1. Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(palavra) {
  let palindromo = "";
  for (let i = palavra.length - 1; i >= 0; i -= 1) {
    palindromo += palavra[i];
  } if (palindromo === palavra) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));