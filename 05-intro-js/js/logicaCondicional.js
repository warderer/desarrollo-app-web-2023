// Cuando uso un solo simbolo de igual (=)
// estoy asignando un valor a una variable
var semaforoActual = "ROJO";

// Mejor se lo pregunto al usuario el semaforo actual
semaforoActual = prompt("¿Cual es el semaforo actual?").toUpperCase();

// Cuando uso dos simbolos de igual (==)
// COMPARO que solo el valor sea el mismo
// Si uso triple simbolo de igual (===)
// COMPARO que el VALOR y el TIPO de datos sean iguales

if (semaforoActual === "VERDE") {
    alert("AVANZA");
} else if (semaforoActual === "AMARILLO") {
    alert("ACELERA (APURATE)");
} else {
    alert("FRENAAA");
}