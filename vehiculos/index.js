class Vehiculo {
    constructor(marca,modelo){
        this.marca = marca
        this.modelo = modelo
    }
    describir (){
        console.log(`este vehiculo es de marca ${this.marca} y es modelo ${this.modelo}`)
    }
    static esMotorizado(){
        return true
    }
}
let vehiculo1 = new Vehiculo("BMW","1989")
vehiculo1.describir()

class Bicicleta extends Vehiculo {
    constructor(marca,modelo,pinon){
        super(marca,modelo)
        this.pinon = pinon
    }
    static esMotorizado (){
        return false
    }
    describir(){
        console.log(`este vehiculo es de marca ${this.marca} y es modelo ${this.modelo} y es una bicicleta`)
    }
}
let biciRoja = new Bicicleta("scott","2025","16") 
console.log(biciRoja)
console.log(Bicicleta.esMotorizado())
console.log(Vehiculo.esMotorizado())