// 5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0

for(let n = 0; n < numbers.length; n += 1) {
  if(maior < numbers[n]) {
    maior = numbers[n]
  }
} console.log(maior)