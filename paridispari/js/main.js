//L’utente sceglie pari o dispari e un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer.
//Sommiamo i due numeri e dichiariamo chi ha vinto.

// pari o dispari
var pariDisp = prompt('Scegli un numero pari o un numero dispari.');

// condition
if (pariDisp % 2 == 0) {
  console.log('Pari!');
} else {
  console.log('Dispari!');
}

var numUser = parseInt(prompt('Scegli un numero da 1 a 5.'));
console.log(numUser);
var numCom = Math.floor(Math.random() * 5 + 1);
console.log(numCom);

var tot = sum(numUser, numCom);
console.log(tot);
var winner = pariDispari();

function sum(num1, num2) {
  result = num1 + num2;

  return result;
}


function pariDispari() {
  if (tot %2 == 0 && numUser % 2 == 0) {
    console.log('WIN!');
  }else if (tot %2 != 0 && nameUser % 2 != 0) {
    console.log('WIN!');
  }else {
    console.log('LOSE!');
  }
}
