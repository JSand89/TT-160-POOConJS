class Empleado {
    constructor(salarioBase,nombre){
        this.salarioBase = salarioBase
        this.nombre = nombre
    }
    calcularSalario(){
        console.log(`El salario a pagar es ${this.salarioBase*0.92}`)
        return this.salarioBase*0.92
    }
    static contar(lista){
        return lista.length
    }
    static pila(lista){
        return lista.reduce((accu,empleado)=>
        accu + empleado.salarioBase*0.24,0)
    }
    static sueldos(lista){
        return lista.reduce((acumulador,empledo)=>{
           if(empledo.constructor.name =="Gerente"){
            return acumulador + empledo.salarioBase*0.92 +1000
           }else if(empledo.constructor.name =="Desarrolador"){
            return acumulador + empledo.salarioBase*0.92 +500 
           }else{
            return acumulador + empledo.salarioBase*0.92  
           }
           },0)
    }
}
class Gerente extends Empleado{
    calcularSalario(){
        console.log(`El salario a pagar es ${this.salarioBase*0.92+1000}`)
        return this.salarioBase*0.92 + 1000
    }
}
class Desarrollador extends Empleado{
    constructor(salarioBase,nombre,tecnologias){
        super(salarioBase,nombre)
        this.tecnologias = tecnologias
    }
    calcularSalario(){
        console.log(`El salario a pagar es ${this.salarioBase*0.92+500}`)
        return this.salarioBase*0.92 + 500        
    }
}
let empleado1 = new Empleado(1000,"Juan")
let empleado2 = new Empleado(800,"Pedro")
let gerente1 = new Gerente(5000,"Luis")
let dev1 = new Desarrollador(3500,"Esteban",["js","REACT","node"])
console.log(empleado1)
console.log(Empleado.contar([empleado1,empleado2]))
empleado1.calcularSalario()
gerente1.calcularSalario()
dev1.calcularSalario()
console.log(Empleado.pila([empleado1,empleado2,gerente1,dev1]))
console.log(Empleado.sueldos([empleado1,empleado2,gerente1,dev1]))
