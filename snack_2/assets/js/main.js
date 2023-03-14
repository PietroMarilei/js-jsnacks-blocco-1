// SNACK 2:
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.
const firstWord = prompt('inserisci una parola')
console.log(firstWord);
const secondWord = prompt('inserisci una parola')
console.log(secondWord);

// ----

const firstWordLenght = prompt('inserisci una parola').length;
console.log(firstWordLenght);
const secondWordLenght = prompt('inserisci una parola').length;
console.log(secondWordLenght);

if (firstWordLenght < secondWordLenght) {
    document.querySelector("h1").innerHTML = `${firstWord} é piú corta di ${secondWord}`;
} else if (firstWordLenght > secondWordLenght) {
    document.querySelector("h1").innerHTML = `${secondWord} é piú corta di ${firstWord}`;

} else {
    document.querySelector("h1").innerHTML = `${firstWord} e ${secondWord} sono lunghe uguali`;
}

