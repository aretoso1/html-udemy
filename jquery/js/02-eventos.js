$(document).ready(function(){
    console.log('documento cargado');
    //Eventos MouseOver y Mouseout

    var caja = $("#caja");

    // caja.mouseover(function(){
    //     $(this).css("background","violet");
    // })

    // caja.mouseout(function(){
    //     console.log("sali de la caja");
    //     $(this).css("background","yellowgreen");
    // })

    //Vamos a mejorar el código anterior, utilizaremos las funciones de callback
    function cambiarVioleta(){
            $(this).css("background","violet")
        };

    function cambiarAmarillo(){
            console.log("sali de la caja");
            $(this).css("background","yellowgreen")
        };



    //Hover
    caja.hover(cambiarVioleta,cambiarAmarillo);
    
    //Click y Dblclick

    caja.click(function(){
        $(this).css("background","red")
                .css("border","black")
    });

    caja.dblclick(function(){
        $(this).css("background","blue")
                .css("border","white")
    });

    //Focus y blur

    var nombre= $("#nombre");
    var datos= $("#datos");
    nombre.focus(function(){
        console.log("estoy enfocando");
        $(this).css("border","10px solid red")
    });

    nombre.blur(function(){
        $(this).css("border", "1px solid green")
        
        datos.text($(this).val()).show();
    });

    //Mousedown y mouseup

    datos.mousedown(function(){
        $(this).css("border-color", "gray");
    })

    datos.mouseup(function(){
        $(this).css("border-color", "black");
    });

    //Mousemove

    $(document).mousemove(function(){
        $("body").css("cursor","none");
        console.log("coordenada X: "+event.clientX);
        console.log("coordenada Y: "+event.clientY);
        $("#sigueme").css("left",event.clientX)
                    .css("top",event.clientY);
    })





})