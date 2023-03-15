// Snack 4 (sia con for che con while):
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.



const invited = [
    "paolo",
    "franco",
    "giulio"
]

const userName = prompt('quale é il tuo nome ?')

// let hasAccess = false;
// for (let i = 0; i < invited.length; i++) {
//     const thisPerson = invited[i];

//     if (thisPerson === userName){
//         hasAccess = true;
//     }

// }


// if (hasAccess = true) {
//     console.log('benvenuto alla festa');

// } else if (hasAccess = false) {
//     console.log(" devi avere un invito per entrare");
// }


// non so perché non va 


let hasAccess = false;

let k = 0

while (k < invited.length) {
    const thisPerson = invited[k];

    if (thisPerson === userName) {
        hasAccess = true;
    }
    k++;
}

if (hasAccess = true) {
    console.log('benvenuto alla festa');

} else if (hasAccess = false) {
    console.log(" devi avere un invito per entrare");
}

// perché scrive sempre benvenuto ?