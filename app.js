// Global variables
const texts = ['friends.', 'lovers.', 'family.'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

// Dom Selectors
const addWordBtn = document.getElementById('add-word');
const typingInput = document.querySelector('.typing');

// Event listeners
addWordBtn.addEventListener('click', addWord);

// custom functions
function addWord() {
  // do something here
  console.log('OHHHH its not ready yet');
}

function removeWord() {
  // do something here
  console.log('OHHHH its not ready yet');
}

function showSelectedWords() {}

(function type() {
  count = count % texts.length;
  currentText = texts[count];
  letter = currentText.slice(0, index++);

  typingInput.textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
})();
