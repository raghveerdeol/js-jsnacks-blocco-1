/* Snack8 
Crea due tag div con due id diversi. 
Un div avrà il testo colorato di rosso mentre l'altro di verde. 
Partendo da un array di numeri, 
stampiamo nell'id rosso i numeri dispari e in verde i numeri pari. */

const divRed = document.createElement("div");
const divGreen = document.createElement("div");
const main = document.querySelector("main")
main.appendChild(divRed);
main.appendChild(divGreen);
divGreen.className = "green";
divRed.className = "red";
