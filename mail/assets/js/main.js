// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
let mailRegistrate = ["mario@gmail.com", "piero@gmail.com", "marco@gmail.com", "luca@gmail.com", "giovanni@gmail.com"]

let checkMail = prompt ("Inserisci la tua mail")

let soldatino = false

for(let i = 0; i < mailRegistrate.length; i++ ){
  // console.log ( mailRegistrate [i] );
  if (mailRegistrate [i] == checkMail ){
    soldatino = true;
  }  
}

if(soldatino == true){
  console.log("sei registrato");
}else{
  console.log("non sei registrato");
}