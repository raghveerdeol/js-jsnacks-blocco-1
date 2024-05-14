/* Crea un array di numeri interi e fai la somma di tutti gli elementi
che sono in posizione dispari */

const numbers = [1, 2, 3, 4, 5 ,6 , 7 ,8 ,9 ,10];

let somma = 0;

for (let index = 0; index < numbers.length; index++) {
    
    if (index % 2 === 1) {
        somma += numbers[index];
    }
}
console.log(numbers, somma);