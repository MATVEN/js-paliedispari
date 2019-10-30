//Una funzione per capire se la parola è palindroma

// inserire un nome
var word = prompt('Inserisci una parola.');

// function perform
palindrom(word);

// funzione
function palindrom(inputWord) {

//var arrayEmpty[];
var revert = '';

for (var i = inputWord.length -1; i >= 0; i--) {
  revert = revert + inputWord[i];
  //arrayEmpty.push (inputWord[i]);

  if (word == revert) {
    console.log('Palindrom');
  }else {
    console.log('Not Palindrom!');
  }
 }
}
