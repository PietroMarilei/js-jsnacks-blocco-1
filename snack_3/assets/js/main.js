// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// const userNumber = []

// let sum;

// for (let i = 0; i < 10; i++) {
//     // const userNumber = Number(prompt("inserisci un numero"));
//     userNumber.push(Number(prompt("inserisci i numeri")));
//     sum = userNumber[i]++;

// }

// console.log(userNumber);

// console.log(sum)

// WHILE LOOP Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


// let sum = 0;

// for (let y = 0; y < 3; y++) {
//     let numbers = Number(prompt('Scrivi un numero'));
//     console.log(numbers)

//     sum = sum + numbers;

// }
let sum = 0;
let k = 0

while (k < 10) {

    let numbers = Number(prompt('Scrivi un numero'));
    console.log(numbers)

    sum = sum + numbers;

    k++

}

console.log(sum);