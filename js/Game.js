/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//create a Game class with Phrase objects
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("how are you"), 
      new Phrase("time to dance"), 
      new Phrase("break it down"), 
      new Phrase("hold up"), 
      new Phrase("you are the chosen one")
    ];
    this.activePhrase = null;
  }
/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase () {
  return this.phrases[Math.floor(Math.random() * this.phrases.length)];
}
/**
* Begins game by selecting a random phrase and displaying it to user
*/
startGame() {
  this.reset();
  const overlay = document.getElementById("overlay");
  const randomPhrase = this.getRandomPhrase().phrase;
  overlay.style.display = "none";
  this.activePhrase = new Phrase(randomPhrase);
  this.activePhrase.addPhraseToDisplay();
  }
/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin()  { 
  const letters = document.getElementsByClassName("hide letter");
  if (letters.length === 0) {
  return true;
} else {
  return false;
}
}
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife() {
  this.missed += 1
  const hearts = document.querySelectorAll('.tries')
  hearts[this.missed -1].childNodes[0].src = "images/lostHeart.png";
  if (this.missed === 5) {
    this.gameOver("lose");
  }
}
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(WinLose) {
  const overlay = document.getElementById("overlay");
  const randomPhrase = this.getRandomPhrase().phrase;
  const h1 = document.getElementById("game-over-message")
  if (WinLose === true) {
    overlay.style.display = "block";
    const h1 = document.getElementById("game-over-message")
    overlay.className = "win"
    h1.innerHTML = "Good job! You won!"
  } else {
    overlay.style.display = "block";
    const h1 = document.getElementById("game-over-message")
    overlay.className = "lose"
    h1.innerHTML = "Sorry you lost, better luck next time"
  }
    
  }
/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
handleInteraction(e) {
  if(this.activePhrase.checkLetter(e.textContent)){
    e.className = "chosen";
    this.activePhrase.showMatchedLetter(e.textContent);
    if (this.checkForWin()){
      this.gameOver(true);
    }
    if (this.missed > 4) {
      this.gameOver(false);
    }
  }else if (e.disabled === false) {
    e.className = "wrong";
    this.removeLife()
    } 
  e.disabled = true
};
//resets all fields after Game ends
reset() {
  const ul = document.getElementById("phrase").firstElementChild
  ul.textContent= "";
  const hearts = document.querySelectorAll('.tries')
  hearts.forEach(heart => {
    heart.childNodes[0].src = "images/liveHeart.png";
  });
  const keys = document.querySelectorAll(".key, .wrong, .chosen")
  keys.forEach(key => {
    key.classList = "key"
    key.disabled = false;
  })
}
}
