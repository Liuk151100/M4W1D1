// 1
function exercise1() {
    let num1 = 24;
    let num2 = 25;
    if ((num1 == 50) || (num2 == 50) || ((num1 + num2) == 50)) {
        return true
    } else {
        return false
    }
}
console.log(exercise1())



// 2
var stringaDaModificare = "Ciao";
function exercise2(posizione, stringa) {
    let stringaModificata = ""
    stringaModificata = stringa.substring(0, posizione) + stringa.substring(posizione + 1);
    return stringaModificata
}
console.log(exercise2(2, stringaDaModificare))



// 3
function exercise3() {
    let num1 = 50;
    let num2 = 71;
    if (((num1 > 40 && num1 < 60) || (num1 > 70 && num1 < 100)) && ((num2 > 40 && num2 < 60) || (num2 > 70 && num2 < 100))) {
        return true
    } else {
        return false
    }
}
console.log(exercise3())



// 4
var nomeCitta = " Los Angeles";
function exercise4(cittaDaVerificare) {
    let varAppoggio1
    let varAppoggio2
    varAppoggio1 = cittaDaVerificare.search("Los")
    varAppoggio2 = cittaDaVerificare.search("New")
    if ((varAppoggio1 != -1) || (varAppoggio2 != -1)) {
        return cittaDaVerificare
    } else {
        return "error"
    }
}
console.log(exercise4(nomeCitta))

//5
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somma = 0;
array.forEach(exercise5);
function exercise5(index) {
    somma += index;
}
console.log(somma)

//6
const array2 = [9, 5, 9, 0];
let cond1 = array2.includes(1);
let cond2 = array2.includes(3);
function exercise6() {
    if (cond1 || cond2) {
        return false
    } else {
        return true
    }
}
console.log(exercise6());

//7
const angRetto = 90
const angPiatto = 180
let angolo = 90
function exercise7() {
    if (angolo < angRetto) {
        return "acuto"
    } else if ((angolo > angRetto) && (angolo < angPiatto)) {
        return "ottuso"
    } else if (angolo = angRetto) {
        return "retto"
    } else if (angolo = angPiatto) {
        return "piatto"
    }
}
console.log(exercise7())

//8
let parola = "Fabbrica Italiana Automobili Torino";
function exercise8() {
    let app1 = parola.split(" ");
    let acronimo = ""
    for (let i = 0; i < app1.length; i++) {
        app2 = app1[i].substring(0,1)
        acronimo += app2
    }
    return acronimo
}
console.log(exercise8());