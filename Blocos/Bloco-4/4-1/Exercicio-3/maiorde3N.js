// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 256;
let b = 260;
let c = 265;

if (a > b && a > c) {
  console.log("O número contido em a é o maior entre os três");
} else if (b > a && b > c) {
  console.log("O número contido em b é o maior entre os três");
} else {
  console.log("O número contido em c é o maior entre os três");
}
