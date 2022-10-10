$(document).ready(function(){
    console.log('La página ha cargado');

    var elemento= $(".elemento");
    var list= $(".lista-seleccionable")

    //drag elemento Mover
    elemento.draggable();

    // Redimensionar
    elemento.resizable();

    //seleccionar

    //$(".lista-seleccionable").selectable();

    //sortable ordena la lista
    $(".lista-seleccionable").sortable({
        update:function(event,ui){
            console.log('Ha cambiado la lista');

        }
    });

    //Dropable
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop:function(){
            console.log("Has soltado algo dentro del area");
        }
    });

    //Efectos

    var mostrar= $("#mostrar");
    var mostrarEfectos= $(".mostrar-efectos");
    mostrar.click(function(){
        //mostrarEfectos.toggle();
        //Hace un fundido
        //mostrarEfectos.fadeToggle();
        //Efecto explotar
        //mostrarEfectos.effect('explode');
        //mostrarEfectos.toggle('explode');
        // mostrarEfectos.toggle('blind');
        // mostrarEfectos.toggle('slide');
        // mostrarEfectos.toggle('drop');
        // mostrarEfectos.toggle('fold');
         mostrarEfectos.toggle('puff', 'fast');
        // mostrarEfectos.toggle('scale');
        // mostrarEfectos.toggle('shake', 'slow');
    })
    

        //Tootips

        $(document).tooltip();

        //Dialog

        var lanzar=$("#lanzar-popup");
        var dialogo=$("#popup");
        lanzar.click(function(){
            dialogo.dialog()

        });


        //Calendario
        var calendar= $("#calendario");
        calendar.datepicker();

        //Pestañas

        var pestanas= $("#pestanas");
        pestanas.tabs();

        



});