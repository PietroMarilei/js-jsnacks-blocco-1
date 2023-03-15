// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array

const numbers = [];

// for (let i = 0; i < 6; i++) {
//     const thisNumber = numbers[i];
//     const userEntry = Number(prompt('inserisci un numero'));
//     console.log(userEntry);

//     if (userEntry % 2 !== 0) {
//         console.log("é dispari");
//         numbers.push(userEntry);
//     }


// }

// console.log(numbers);

// while loop


k = 0
while (k < 6) {
    const userEntry = Number(prompt('inserisci un numero'));
    console.log(userEntry);

    if (userEntry % 2 !== 0) {
        console.log("é dispari");
        numbers.push(userEntry);
    }

    k++
}

console.log(numbers);