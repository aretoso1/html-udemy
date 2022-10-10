$(document).ready(function(){
    console.log('Ajax works')
    //load

    //$("#datos").load("https://reqres.in/");

    //Get y Post

    $.get("https://reqres.in/api/users", {page:2},function(response){
        console.log(response);
        response.data.forEach((element,index)=>{
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });

    });
    


    $("#formulario").submit(function(e){
        e.preventDefault();
        var usuario={
            "name":$('input[name="first_name"]').val(),
            "job":$('input[name="job"]').val()
        }
        
        // $.post($(this).attr("action"), usuario,function(response){
        //     console.log(response, 'ehh');
            
        // }).done(function(){
        //     alert("Usuario creado correctamente");
        // });

        //Peticiones usando $.ajax

        $.ajax({
            type:'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log('Enviando usuario');
            },
            success: function(response){
                console.log(response);
            },
            error:function(){
                console.log('Ha ocurrido un error');

            },
            timeout: 1000

        })

        return false;

    });
});