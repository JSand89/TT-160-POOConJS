class Rectangulo {
    constructor(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    calArea(unidad,nombreUnidad){
        return this.alto * this.ancho*unidad + nombreUnidad;
    }
}

const rectangulo1 = new Rectangulo(10,15)

console.log(rectangulo1.calArea(1000,"km"))


class Animal {
    constructor(nombre){
        this.nombre = nombre
    }
    hablar (){
        console.log(`${this.nombre} hace ruido`)
    }
}
class Perro extends Animal {
    hablar(){
        console.log(`${this.nombre} ladra`)
    }
}
let petunia = new Perro("Petunia")
petunia.hablar()