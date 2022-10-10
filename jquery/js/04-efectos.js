$(document).ready(function(){
    console.log('carga correctamente');

    var mostrar = $("#mostrar");
    var ocultar = $("#ocultar");
    var caja = $("#caja");
    mostrar.hide();

    mostrar.click(function(){
        $(this).hide();
        ocultar.show();
        
        //Este método hace una animación desde el borde superior izquierdo
        // caja.show('fast');

        //Este método hace un fundido

        // caja.fadeIn('fast');
        //Este método hace un fundido

        //caja.fadeTo('slow',1);

        //Este método hace un slide

        caja.slideDown('slow');
    });

    ocultar.click(function(){
        $(this).hide();
        mostrar.show();
        //Este método hace una animación desde el borde superior izquierdo
        // caja.hide('fast');

        //Este método hace un fundido
        // caja.fadeOut('fast');

        //Este método hace un fundido
        //caja.fadeTo('slow',0);

        //Este método hace un slide

        caja.slideUp('slow', function(){
            console.log('se ha ocultado');
        });


    })


    $("#todoenuno").click(function(){
        //caja.toggle('fast')
        //caja.fadeToggle('fast')
        caja.slideToggle('fast')

    })

    $("#animar").click(function(){
        caja.animate({
            marginLeft:'500px',
            fontSize:'40px',
            height: '110px'
        },'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '50px'
            }, 'fast')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0px'
            }, 'fast')
            caja.animate({
                marginLeft:'500px',
                fontSize:'40px',
                height: '110px'
            },'slow');
    })
})