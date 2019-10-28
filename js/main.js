//Una funzione per capire se la parola è palindroma
//L’utente sceglie pari o dispari e un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer.
//Sommiamo i due numeri e dichiariamo chi ha vinto.

// pari o dispari
var x = prompt('Scegli un numero pari o un numero dispari.');

// condition
if (x % 2 == 0) {
  console.log('Pari!');
} else {
  console.log('Dispari!');
}

var z = parseInt(prompt('Scegli un numero da 1 a 5.'));
console.log(z);

var tot = sum();
console.log(tot);
var winner = pariDispari();

function sum() {
  var com = Math.floor(Math.Random() * 6 + 1);
  console.log(com);
  result = z + com;

  return result;
}

function pariDispari() {
  if (tot %2 == 0 && x % 2 == 0) {
    console.log('WIN!');
  }else if (tot %2 != 0 && x % 2 != 0) {
    console.log('WIN!');
  }else {
    console.log('LOSE!');
  }
}
