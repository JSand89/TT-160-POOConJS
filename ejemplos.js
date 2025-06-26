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

class Punto {
    constructor(x,y){
        this.x = x
        this.y = y
    }
    static distancia(a,b){
        const distanciaX = a.x -b.x
        const distanciaY = a.y - b.y
        return Math.sqrt(distanciaX*distanciaX + distanciaY*distanciaY)
    }
}
const p1 = new Punto(10,10)
const p2 = new Punto(5,5)
console.log(p1.x)
console.log(Punto.distancia(p1,p2))