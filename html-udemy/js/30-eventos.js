'use strict'

//Eventos del ratón

window.addEventListener('load', ()=>{
    function cambiaColor(){
    var bg=boton.style.background;
    if(bg=='green'){
        boton.style.background='red';
    }else{
        boton.style.background='green';
    }
    boton.style.padding="10px";
    boton.style.border="1px solid #ccc";

    return true
    }

    var boton=document.querySelector('#boton');


//Evento click
    boton.addEventListener('click', function(){
    cambiaColor();
    });

//Evento MouseOver

    boton.addEventListener('mouseover', function(){
    boton.style.background="#ccc";
});


    boton.addEventListener('mouseout', function(){
    boton.style.background="black";
});

// Focus
    var input = document.querySelector("#campo_nombre")
    input.addEventListener('focus', function(){
    console.log('[focus] Estas dentro del input');
});




//Blur
    var input = document.querySelector("#campo_nombre")
    input.addEventListener('blur', function(){
    console.log('[blur] Estas fuera del input');
});


//Keydown
    var input = document.querySelector("#campo_nombre")
    input.addEventListener('keydown', function(event){
    console.log('[keydown] Estas pulsando la tecla ', String.fromCharCode(event.keyCode));
});

//Keypress


//Keydown
    var input = document.querySelector("#campo_nombre")
    input.addEventListener('keypress', function(event){
    console.log('[keypress] Presionaste la tecla ', String.fromCharCode(event.keyCode));
});


//Keyup
    var input = document.querySelector("#campo_nombre")
    input.addEventListener('keyup', function(event){
    console.log('[keypress] Soltaste la tecla ', String.fromCharCode(event.keyCode));
});





});// end load