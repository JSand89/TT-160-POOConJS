class Libro {
    constructor(titulo,autor,isbn,disponible = true){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.disponible = disponible;
    }
}

class Usuario  {
    constructor(nombre,email){
        this.nombre = nombre;
        this.email = email;
        this.librosPrestados = [];
    }

    prestarLibro(libro){
        if(libro.disponible){
            this.librosPrestados.push(libro)
            libro.disponible = false;
            console.log(`${libro.titulo} fue prestado a ${this.nombre}`)
            return true
        }else {
            console.log(`El Libro ${libro.titulo} no esta disponible`)
        }
    }
    devolverLibro(libro){
        const resultado = this.librosPrestados.filter(elemento=>libro==elemento)
        if(resultado.length>0){
            libro.disponible = true
            console.log(`${libro.titulo} devuelto por ${this.nombre}`)
            this.librosPrestados = this.librosPrestados.filter(elemento=>elemento!=libro)
            return true
        }else{
            console.log(`${libro.titulo} no esta prestado a el usuario ${this.nombre}`)
            return false
        }
    }
}

let libro1 = new Libro("1984","George Orwell","124rt435")
let libro2 = new Libro("Juramentada","Brando Sanderson", "132rjkakjf",false)
console.log(libro1)
console.log(libro2)
let petunia = new Usuario("Petunia","petunia@gmail.com")
let javier = new Usuario("Javier","javier@gmail.com")
petunia.prestarLibro(libro2)
petunia.prestarLibro(libro1)
petunia.devolverLibro(libro2)
console.log(petunia.librosPrestados)