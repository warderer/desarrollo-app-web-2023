// Las clases son una forma de crear objetos como si fueran una plantilla

class Pokemon {
    constructor(nombre, tipo, vida, ataque, defensa, habilidades) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.habilidades = habilidades;
    }

    atacar() {
        const posHabilidad = Math.floor(Math.random() * this.habilidades.length);
        return this.habilidades[posHabilidad];
    }

    listaHabilidades() {
        for (let i = 0; i < this.habilidades.length; i++) {
            console.log(this.habilidades[i]);
        }
    }
}

const pikachu = new Pokemon("Pikachu", "Eléctrico", 100, 55, 40, ["Impactrueno", "Chispazo", "Ataque rápido"]);
console.log(pikachu)

const charizard = new Pokemon("Charizard", "Fuego", 120, 65, 45, ["Lanzallamas", "Ascuas", "Ataque rápido"]);
console.log(charizard)

const evee = new Pokemon("Evee", "Normal", 100, 55, 40, ["Ataque rápido", "Látigo cepa", "Bola voltio"]);
console.log(evee.nombre + ' ataca con ' + evee.atacar())

const roselia = new Pokemon("Roselia", "Planta", 100, 55, 40, ["Ataque rápido", "Látigo cepa", "Bola voltio"]);

const deoxys = new Pokemon("Deoxys", "Psíquico", 100, 55, 40, ["Ataque rápido", "Látigo cepa", "Bola voltio"]);