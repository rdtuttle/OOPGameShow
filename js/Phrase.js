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

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
checkLetter(selectedLetter){
  let doesLetterMatch = false
  this.phrase.split("").forEach(letter => {
     if(letter === selectedLetter){
       doesLetterMatch = true
     } 
 })
 return doesLetterMatch
}

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
showMatchedLetter(selectedLetter) {
  const LetterBox = document.querySelectorAll('.letter')
    LetterBox.forEach(letter => {
      if (letter.classList.contains(selectedLetter)){
          letter.classList.remove("hide")
          letter.classList.add("show")
      } 
    })
  }
}
