/* Snack8 
Crea due tag div con due id diversi. 
Un div avrà il testo colorato di rosso mentre l'altro di verde. 
Partendo da un array di numeri, 
stampiamo nell'id rosso i numeri dispari e in verde i numeri pari. */

const divRed = document.createElement("div");
const divGreen = document.createElement("div");
const main = document.querySelector("main");
main.appendChild(divGreen);
main.appendChild(divRed);
divGreen.classList.add("green");
divRed.classList.add("red");

const newArray = [1,2,3,4,5,6,7,8,9];
for (let index = 0; index < newArray.length; index++) {
    const newElement = document.createElement("p");
    newElement.append(newArray[index]);
    if (newArray[index] % 2 === 0 ) {
        divGreen.appendChild(newElement);
    } else {
        divRed.appendChild(newElement);
}
}
