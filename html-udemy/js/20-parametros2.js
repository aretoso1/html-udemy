'use strict'

//Parámetros rest y spread

function ListadoFrutas(fruta1,fruta2,...resto_frutas){
    console.log("Fruta 1 :", fruta1);
    console.log("Fruta 2 ", fruta2);
    console.log(resto_frutas);
}

ListadoFrutas("fresa", "uva","manza","pera","melón","cambur")
//Se debe crear una variable y los tres puntos a la clase para que sea un parámetro spread
var fruits=["sandia","mandarina"]
ListadoFrutas(...fruits,"cotoperi","mamon","tamarindo")