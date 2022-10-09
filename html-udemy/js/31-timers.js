'use stric'

window.addEventListener('load',()=>{
    //Timers

    function interval(){
        var tiempo= setInterval(function(){
            console.log('Set interval ejecutado');
            var encabezado=document.querySelector("h1");
            if(encabezado.style.fontSize=="50px"){
                encabezado.style.fontSize="150px";
    
            }else{
                encabezado.style.fontSize="50px";
            }
            
        }, 1000);

        return tiempo;
    

    }

    var tiempo= interval();

    var stop= document.querySelector("#stop");
    stop.addEventListener('click',function(){
        alert('Has detenido el bucle');
        clearInterval(tiempo);
    })
    var start= document.querySelector("#start");
    start.addEventListener('click',function(){
        alert('Has iniciado el bucle');
        interval();
    })
    
    
    var tiempo2 = setTimeout(function(){
        console.log('Settimeout ejecutado');
        var title=document.querySelector("#encabezado");
        if(title.style.fontSize=="60px"){
            title.style.fontSize="100px";
        }else{
            title.style.fontSize="60px";
        }
    },3000)














});//end load