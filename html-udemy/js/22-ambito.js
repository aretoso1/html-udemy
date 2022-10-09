'use stric'


//Hemos creado una variable dentro de la función, se puede usar allí pero fuera de ella no

function holaMundo(texto){
    var hola_mundo="Esto no es una variable global"
    console.log(texto);
    console.log(number);
    console.log(hola_mundo);
}

//En este caso hemos creado una variable global y puede usarse dentro de las funciones pero el recíproco no es cierto
var texto="Hola mundo esto es un ejemplo de una variable global";
var number=21;
holaMundo(texto);

//Al usar el comando de abajo, se genera un error por el tema de las variables globales y no globales
//console.log(hola_mundo);

//Hemos aplicado un método a un objeto para transformarlo en string.

function holaMundo2(texto){
    
    console.log(texto);
    console.log(number.toString());
    
}

holaMundo2(texto);

//typeof nos permite ver el tipo de estructura de dato

function holaMundo3(texto){
    
    console.log(texto);
    console.log(typeof number.toString());
    
}

holaMundo3(texto);