const button = document.querySelector('#button');

let clickCount = 0;

button.addEventListener('click', () => {
  clickCount += 1;
  button.innerHTML = clickCount;
});
