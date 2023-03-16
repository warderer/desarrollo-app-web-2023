/* GENERADOR DE EXCUSAS 
Va a escoger al azar, una frase de cada columna (son 3 columnas)
y luego va a armar mi excusa concatenando las frases seleccionadas de cada columna
*/

// Paso #1 Declaro mi arreglo de elementos con la información de las excusas
const columnaA = [
    "En cuanto arreglemos el goteo de recursos",
    "En cuanto completemos las pruebas",
    "En cuanto hayamos optimizado el código",
    "Apenas nos arreglen el bug",
    "Cuando se solvente el problema de instalación",
    "Cuando averiguemos por qué se cae el proceso",
    "Cuando hayamos mejorado el rendimiento",
    "En cuanto completemos la restauración",
    "Apenas instalemos el último parche",
    "En cuanto terminemos la implementación"
];

const columnaB = [
    "del interfaz XML",
    "del sistema de colas",
    "del buffer de entrada",
    "del gestor de peticiones",
    "de las clases de abstracción",
    "del recolector de basura",
    "de la nueva versión",
    "del caché",
    "de la versión customizada",
    "del conversor de protocolos"
];

const columnaC = [
    "del directorio LDAP",
    "de la máquina virtual de Java",
    "del proxy inverso",
    "del gestor del cluster",
    "del broker de objetos distribuidos",
    "de la capa de presentación",
    "del despachador de certificados",
    "de la base de datos",
    "del servidor seguro",
    "del acelerador de transacciones"
 ]

 // Paso #2 Crear una función que me genere una excusa de forma aleatoria
function generaExcusa() {
    // Calcular de forma aleatoria el indice para cada arreglo de frases
    const posicionA = Math.floor(Math.random() * columnaA.length);
    const posicionB = Math.floor(Math.random() * columnaB.length);
    const posicionC = Math.floor(Math.random() * columnaC.length);

    // Armar mi frase usando las 3 partes de la excusa en una sola.
    // Para ello necesito concatenar las frases de cada columna
    const excusa = columnaA[posicionA] + " " + columnaB[posicionB] + " " + columnaC[posicionC];

    // Hacemos que mi función devuelva la excusa generada
    return excusa;
}

// Paso #3 Crear una función que me muestre la excusa en el HTML
function colocaExcusa() {
    document.getElementById("excusa").innerHTML = generaExcusa();
}

// Paso #4 Mandar a llamar a mi función para que se genere una frase al cargar la página
colocaExcusa();

// Paso #5 Crear un botón que al hacer click genere una nueva excusa