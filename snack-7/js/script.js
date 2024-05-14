/* Snack7
Fai inserire un numero, che chiameremo N, all'utente. Genera N array,
ognuno formato da 10 numeri casuali da 1 a 100. 
 Ogni volta che ne crei uno, stampalo. */

let n = Number.parseInt(prompt("inserire un numero"));

for (let index = 0; index <= n; index++) {
    
    const numeroarray = [];
    for (let y = 0; y <=9; y++){
        numeroarray.push(Math.floor(Math.random() * 100) + 1);
    
    }
    console.log( numeroarray);
}



