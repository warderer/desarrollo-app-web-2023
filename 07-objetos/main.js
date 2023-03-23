// OBJETOS LITERALES
// Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. Un valor de propiedad puede ser una función, que se denomina entonces un método del objeto. En JavaScript, casi "todo" es un objeto.

let pikachu = {
    nombre: "Pikachu",
    tipo: "Eléctrico",
    vida: 100,
    ataque: 55,
    defensa: 40,
    habilidades: ["Impactrueno", "Chispazo", "Ataque rápido"]
};

// Para acceder a la información de un objeto, puedo:

// 1. Usar la notación de punto objeto.atributo:
console.log(pikachu.nombre);

// 2. Usar la notación de corchetes objeto["atributo"]:
console.log(pikachu["tipo"]);

console.log('Pikachu tiene ' + pikachu.vida + ' puntos de vida');

// METODOS DE UN OBJETO
// Acciones que puede realizar mi objeto
let pikachu2 = {
    nombre: "Pikachu",
    tipo: "Eléctrico",
    vida: 100,
    ataque: 55,
    defensa: 40,
    habilidades: ["Impactrueno", "Chispazo", "Ataque rápido"],
    atacar: function() {
        const posHabilidad = Math.floor(Math.random() * this.habilidades.length);
        return this.habilidades[posHabilidad];
    },
    listaHabilidades: function() {
        for (let i = 0; i < this.habilidades.length; i++) {
            console.log(this.habilidades[i]);
        }
    }
};

console.log('Pikachu ataca con ' + pikachu2.atacar());
pikachu2.listaHabilidades();

// Para actualizar el valor en un objeto existente, solamente hago una operación de asignación: objeto.atributo = nuevoValor;
pikachu2.vida = 200;
console.log('Pikachu2 tiene ' + pikachu2.vida + ' puntos de vida'); //200

// Imprimir todo el objeto
console.log(pikachu2);

// Borrar un atributo de un objeto
delete pikachu2.defensa;
console.log(pikachu2);

// Forma de traer datos de una API
fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(data => console.log(data.name));
