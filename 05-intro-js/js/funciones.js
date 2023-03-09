// DRY - Don't Repeat Yourself

// Las funciones nos permiten reutilizar código, invocando su nombre.
// Las funciones pueden recibir parámetros y pueden regresar (retorne) un valor.

// Declaración de mi función
function sumaDosNumeros(num1, num2){
    return (num1 + num2);
}

// Invocación de mi función (ejecución)
console.log(sumaDosNumeros(5,10));

console.log(sumaDosNumeros(100,40));


// En ES6, podemos guardar la función en una constante usando arrow functions (funciones de flecha)
const multiplicaDosNumeros = (num1, num2) => {
    return (num1 * num2);
}

var numero1 = parseInt(prompt('¿Cuál es el primer número?'));
var numero2 = parseInt(prompt('¿Cuál es el segundo número?'));
alert("La multiplicación es " + multiplicaDosNumeros(numero1,numero2));