// L'utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const num1 = Number.parseInt( prompt('inserire numero 1'), 10);
const num2 = Number.parseInt(prompt('inserire numero 2'), 10);

if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}