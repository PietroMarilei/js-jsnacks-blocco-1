// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

const userNumber = []

let sum;

for (let i = 0; i < 10; i++) {
    // const userNumber = Number(prompt("inserisci un numero"));
    userNumber.push(Number(prompt("inserisci i numeri")));
    sum = userNumber[i]++;

}

console.log(userNumber);

console.log(sum)
