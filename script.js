console.log('ciao mondo');

//Mail
//Crea un array con delle email di chi può acedere.
//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.
//Non è necessario provvedere alla validazione delle email.
//NON USARE INCLUDES!

//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Prima di partire a scrivere codice poniamoci qualche domanda:
//Che ci sia un array da qualche parte?
//Se dobbiamo confrontare qualcosa che "cosa" ci serve?

//Consigli del giorno:
//1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
//3. si ma noi cosa vogliamo fare?
//4. torniamo a scrivere in italiano
//5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

//Buon lavoro e buon divertimento!




// ----- Controllo accesso email -----

// Creo un array con le email di chi può accedere
// Chiedo all’utente di inserire la propria email
// Controllo se l’email è nella lista e scorriamo l’array con un ciclo for per confrontare ogni email
// Se troviamo l'accesso andiamo avanti, 
// Se troviamo l'accesso è negato, usciamo dal ciclo
// Stampo un messaggio appropriato


const listaEmail = ["gastone@gmail.com", "gisella@gmail.com", "giorgia@gmail.com", "viola@gmail.com"];
const emailUtente = prompt("email");

let accessoConsentito = false;

for (let i = 0; i < listaEmail.length; i++) {
    if (listaEmail[i] === emailUtente) {
        accessoConsentito = true;
        console.log("listaEmail");
    }
}

if (accessoConsentito) {
    console.log("Accesso");
} else {
    console.log("Accesso negato");
}


// ----- Gioco dei dadi -----

// Genero un numero casuale da 1 a 6 sia per il giocatore e sia per il computer
// Confronto i due numeri per vedere quale è il più alto
// Se il giocatore ha un numero più alto del computer vince, 
// Se il giocatore ha un numero più basso del computer perde, 
// Se sono uguali è pareggio
// Quindi stampo un messaggio appropriato tenendo conto dei tre casi


const Giocatore = Math.floor(Math.random() * 6) + 1;
const Computer = Math.floor(Math.random() * 6) + 1;

console.log(`Hai tirato un ${Giocatore}`);
console.log(`Il computer ha tirato un ${Computer}`);

if (Giocatore > Computer) {
    console.log("Hai vinto!");
} else if (Giocatore < Computer) {
    console.log("Hai perso!");
} else {
    console.log("Pareggio!");
}
