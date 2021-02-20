// 1. Crie uma função que receba um número e retorne seu fatorial.

const assert = require('assert');

const fatorial = (number) => {
  if (number == 0) {
    return 1;
  }
  let res = number;
  while (number > 2) {
    res *= --number;
  }
  return res;
}

try {
  assert.equal(1, fatorial(0));
  assert.equal(1, fatorial(1));
  assert.equal(2, fatorial(2));
  assert.equal(6, fatorial(3));
  assert.equal(24, fatorial(4));
  assert.equal(120, fatorial(5));
  assert.equal(720, fatorial(6));
} catch(e) {
  console.log(e);
}
