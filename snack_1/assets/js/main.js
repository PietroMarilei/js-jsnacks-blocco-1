// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const firstNumber = Number(prompt("inserisci un numero"));
console.log(firstNumber)


const secondNumber = Number(prompt("inserisci un altro numero"));
console.log(secondNumber);

if (firstNumber > secondNumber) {
    document.querySelector("div").innerHTML = firstNumber;


} else if (firstNumber < secondNumber) {
    document.querySelector("div").innerHTML = secondNumber;
}
