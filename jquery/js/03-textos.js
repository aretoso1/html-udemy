$(document).ready(function(){

    reloadLinks();
    
    $("#add_button").click(function(){
        console.log($("#add_link").val());

        $("#menu").prepend('<li><a href="'+$("#add_link").val()+'"></a></li>');
        $("#add_link").val('');
        reloadLinks();
    })
    
    console.log("El doc cargo");

    

    function reloadLinks(){
        console.log($('a').length);
        $('a').each(function(index){
        var that = $(this);
        var enlace=that.attr("href");
        that.text(enlace);

        that.attr('target', 'blank');
    })

    }





})