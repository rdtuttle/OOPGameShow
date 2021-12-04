/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

/**
* Display phrase on game board
*/
addPhraseToDisplay () {
  const ul = document.querySelector("#phrase ul")
  for (let i = 0; i < this.phrase.length; i++) {
    if (this.phrase.charAt(i) === " ") {
      const li = document.createElement("li")
      li.className = "space";
      li.textContent= " ";
      ul.appendChild(li);
    }
   if (this.phrase.charAt(i) !== " ") {
     const li = document.createElement("li")
     li.className = "hide letter " + this.phrase.charAt(i);
     li.textContent = this.phrase.charAt(i);
     ul.appendChild(li);
   }
  }
  
}
}
