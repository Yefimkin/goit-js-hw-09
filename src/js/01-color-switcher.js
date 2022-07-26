function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let timerId = null;


startButton.addEventListener('click', () => {
    startButton.setAttribute('disabled', 'true');
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});


stopButton.addEventListener('click', () => {
    clearInterval(timerId);
    startButton.removeAttribute('disabled')
})