'use strict'

const numberOne = prompt('inserisci un numero');
const numberTwo = prompt('inserisci un secondo numero');

if (numberOne > numberTwo) {
    console.log(numberOne);
} else if (numberTwo > numberOne) {
    console.log(numberTwo);
} else {
    console.log('i numeri sono uguali');
}