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

}


