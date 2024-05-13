// Crea un array vuoto.
//  Chiedi per 6 volte all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.

const y = [];
for (let index = 0; index <= 5; index++) {
    const element = prompt("inserire un numero");
    if (element % 2 == 1) {
        y.push(element);
        console.log(y);
    } else {
        console.log(y);
    }
}