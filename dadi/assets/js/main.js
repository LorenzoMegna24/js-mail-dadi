// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
let numeroPc = Math.floor(Math.random() * 10)
console.log(numeroPc);

let numeroGiocatore = Math.floor(Math.random() * 10)
console.log(numeroGiocatore);

if( numeroGiocatore < numeroPc ){
  console.log("Hai perso!");
}else if ( numeroGiocatore == numeroPc ){
  console.log("Pareggio!");
}else{
  console.log("Hai vinto!!");
}
