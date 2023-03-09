// VARIABLES: Sirven para guardar información y para reutilizarla posteriormente

var b = 'Hola Mundo desde el archivo main.js'; //string
console.log(b);

// uso camelCase para declarar mis nombres de variables
var edadLegalEnMexico = 18; //numero

// CONSTANTES: Son variables que no cambian su valor a lo largo del tiempo
// Normalmente, las constantes se declaran con mayúsculas
const GRAVEDAD = 9.8;

// INPUTS Y OUTPUTS (ENTRADAS Y SALIDAS)

// Output: Muestra información al usuario
alert('Hola Delfines'); //Muestra una ventana en el navegador con este mensaje (Output)

// Input: Capturo información del usuario
var nombre = prompt('¿Cuál es tu nombre?'); //Muestra una ventana en el navegador con este mensaje (Input)

// Console.log nos ayuda a mostrar información en la consola del navegador.
console.log(nombre);
console.log('Hola ' + nombre + '. Mucho gusto en conocerte'); // Concatenación


// TIPOS DE DATOS

// Strings(textos): Usar comillas simples o dobles
console.log("Este es un string");
console.log('Este es otro string');

// Números: No usar comillas. Los colocamos tal cual.
console.log(123456789);
console.log(10+5);

// Booleanos: Solo pueden tener dos valores: true o false
var estaInscrito = true;
var servicioSocial = false;