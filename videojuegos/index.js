class Videogame{
    constructor(title,consol,year_release,price){
        this.title = title
        this.consol = consol
        this.year_release = year_release
        this.price = price
    }
    static gamesForCosole(library,consol){
        return library.filter(game=>game.consol==consol)        
    }
}
let sonic = new Videogame("Sonic","Sega","1985",20)
let mario = new Videogame("Mario 64","Nintendo64","1989",30)
let marioParty = new Videogame("Mario Party","Nintendo64","1985",30)

console.log(Videogame.gamesForCosole([sonic,mario,marioParty],"Nintendo64"))
