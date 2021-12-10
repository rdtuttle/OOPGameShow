/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const button = document.getElementById("btn__reset");
//initialize the game to launch on button click
button.addEventListener("click", () => {
  game = new Game();
  game.startGame();
});
document.getElementById('qwerty').addEventListener('click', (e) => {
  if (e.target.className === 'key') {
      game.handleInteraction(e.target);
  }
})
//adds keyboard functionality 
window.addEventListener('keyup', (e) => {
  const keyboard = document.querySelectorAll('.keyrow button');
  [...keyboard].forEach(key => {
    if (key.textContent === e.key) {
      game.handleInteraction(key);
    }
  })
});
