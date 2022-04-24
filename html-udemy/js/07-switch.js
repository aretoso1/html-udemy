'use strict'

//Switch

var edad =34;
var imprime="";

switch(edad){
    case 18:
       imprime="Acabas de cumplir la mayoría de edad";
    break;
    case 25:
        imprime="Eres un adulto";
    break;
    case 40:
         imprime="Crisis de los 40";
    break;
    case 70:
          imprime= "Eres un señor mayor";
    default:
          imprime="Tu edad es neutra";
    break;   
}

console.log(imprime);