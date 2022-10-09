$(document).ready(function(){
    console.log('We are ready');

    //Selector de ID

    var rojo= $('#rojo').css("background", "red")
                        .css("color","white");
    console.log(rojo);

    var blue = $('#blue').css("background", "blue")
                        .css("color","orange");


    //Selectores de clases                    
    var clase= $('.zebra');
    clase.css("border", "5px dashed pink")
    console.log(clase);

    var noborde=$('.sin-borde').click(function(){
        console.log('click dado');
        $(this).addClass('zebra');
    })


    //selectores de etiquetas

    var parrafos= $('p').css("cursor", "pointer");

    parrafos.click(function(){
        var that=$(this);
        if(!that.hasClass('grande')){
            $(this).addClass("grande");

        }else{
            $(this).removeClass('grande');
        }
        
    })


    //Selectores de atributos
    $('[title="Globovision"]').css("background","#ccc");
    $('[title="BTC"]').css("background","yellow");
    $('[title="youtube"]').css("background","brown");

    //Otros

    $('p, a').addClass('margen-superior');

    var busqueda = $("#caja").find('.resaltado')
    var busqueda2=$("#caja .resaltado")
    console.log(busqueda)
    console.log(busqueda2)

    var busqueda3=$("#caja .resaltado").eq(0).parent().parent().parent().find('[title="youtube"]');
    console.log(busqueda3)
    
    

});