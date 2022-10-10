$(document).ready(function(){

    //Slider
    if(window.location.href.indexOf('index')>-1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
          });
    

    }

    
      //Post
    if(window.location.href.indexOf('index')>-1){
        var post= [
            {
                title:'Prueba de título 1',
                date:'Publicado el día '+ moment().format("dddd")+' '+moment().date()+' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique ultricies venenatis. Curabitur tellus velit, blandit at fermentum a, vehicula vitae nisl. Aliquam erat volutpat. Morbi eros enim, ultricies quis volutpat ut, aliquam a odio. Quisque neque lorem, tincidunt nec volutpat ut, convallis sed ipsum. Fusce hendrerit ex dolor, eu blandit enim maximus quis. Quisque mollis tempus tellus, id auctor nulla feugiat ut. Vivamus in sem mollis, blandit nisl vitae, posuere mauris.  Morbi posuere augue justo, vitae dictum elit scelerisque id. Etiam luctus accumsan dignissim.'
            },
            {
                title:'Prueba de título 2',
                date:'Publicado el día '+ moment().format("dddd")+' '+moment().date()+' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique ultricies venenatis. Curabitur tellus velit, blandit at fermentum a, vehicula vitae nisl. Aliquam erat volutpat. Morbi eros enim, ultricies quis volutpat ut, aliquam a odio. Quisque neque lorem, tincidunt nec volutpat ut, convallis sed ipsum. Fusce hendrerit ex dolor, eu blandit enim maximus quis. Quisque mollis tempus tellus, id auctor nulla feugiat ut. Vivamus in sem mollis, blandit nisl vitae, posuere mauris.  Morbi posuere augue justo, vitae dictum elit scelerisque id. Etiam luctus accumsan dignissim.'
            },
            {
                title:'Prueba de título 3',
                date:'Publicado el día '+ moment().format("dddd")+' '+moment().date()+' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique ultricies venenatis. Curabitur tellus velit, blandit at fermentum a, vehicula vitae nisl. Aliquam erat volutpat. Morbi eros enim, ultricies quis volutpat ut, aliquam a odio. Quisque neque lorem, tincidunt nec volutpat ut, convallis sed ipsum. Fusce hendrerit ex dolor, eu blandit enim maximus quis. Quisque mollis tempus tellus, id auctor nulla feugiat ut. Vivamus in sem mollis, blandit nisl vitae, posuere mauris.  Morbi posuere augue justo, vitae dictum elit scelerisque id. Etiam luctus accumsan dignissim.'
            },
            {
                title:'Prueba de título 4',
                date:'Publicado el día '+ moment().format("dddd")+' '+moment().date()+' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique ultricies venenatis. Curabitur tellus velit, blandit at fermentum a, vehicula vitae nisl. Aliquam erat volutpat. Morbi eros enim, ultricies quis volutpat ut, aliquam a odio. Quisque neque lorem, tincidunt nec volutpat ut, convallis sed ipsum. Fusce hendrerit ex dolor, eu blandit enim maximus quis. Quisque mollis tempus tellus, id auctor nulla feugiat ut. Vivamus in sem mollis, blandit nisl vitae, posuere mauris.  Morbi posuere augue justo, vitae dictum elit scelerisque id. Etiam luctus accumsan dignissim.'
            },
            {
                title:'Prueba de título 5',
                date:'Publicado el día '+ moment().format("dddd")+' '+moment().date()+' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique ultricies venenatis. Curabitur tellus velit, blandit at fermentum a, vehicula vitae nisl. Aliquam erat volutpat. Morbi eros enim, ultricies quis volutpat ut, aliquam a odio. Quisque neque lorem, tincidunt nec volutpat ut, convallis sed ipsum. Fusce hendrerit ex dolor, eu blandit enim maximus quis. Quisque mollis tempus tellus, id auctor nulla feugiat ut. Vivamus in sem mollis, blandit nisl vitae, posuere mauris.  Morbi posuere augue justo, vitae dictum elit scelerisque id. Etiam luctus accumsan dignissim.'
            },
            {
                title:'Prueba de título 6',
                date:'Publicado el día '+ moment().format("dddd")+' '+moment().date()+' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique ultricies venenatis. Curabitur tellus velit, blandit at fermentum a, vehicula vitae nisl. Aliquam erat volutpat. Morbi eros enim, ultricies quis volutpat ut, aliquam a odio. Quisque neque lorem, tincidunt nec volutpat ut, convallis sed ipsum. Fusce hendrerit ex dolor, eu blandit enim maximus quis. Quisque mollis tempus tellus, id auctor nulla feugiat ut. Vivamus in sem mollis, blandit nisl vitae, posuere mauris.  Morbi posuere augue justo, vitae dictum elit scelerisque id. Etiam luctus accumsan dignissim.'
            }
          ];
    
          post.forEach((item,index)=>{
            var post =`
                <article class="post">
                    <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>
                            ${item.content}
                        </p>
    
    
                        <a href="#" class="button-more">Leer más</a>
                 </article>
    
            `;
            $("#posts").append(post);
          });
    

    }
      
      //Selector de tema

      var theme= $("#theme");

      $("#to-green").click(function(){
        theme.attr('href', "css/green.css");
      });
      $("#to-red").click(function(){
        theme.attr('href', "css/red.css");
      });
      $("#to-blue").click(function(){
        theme.attr('href', "css/blue.css");
      });

      //Scroll arriba de la web

      $(".subir").click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },500);
        return false
      });

      //Login Falso

      $("#login form").submit(function(){
            var form_name= $("#form_name").val();

            localStorage.setItem("form_name", form_name);


      });

      var form_name= localStorage.getItem("form_name");

      if(form_name !=null && form_name != "undefined"){
        var about_parrafo= $("#about p");
        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
      };

      if(window.location.href.indexOf('about')>-1){
        $("#acordeon").accordion();
      };

      if(window.location.href.indexOf('reloj')>-1){

        setInterval(function(){
            var reloj= moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        },1000);


    
      };

      //Validacion
      if(window.location.href.indexOf('contact')>-1){
        $("#form_contact input[name='date']").datepicker({
            dateFormat:'dd-mm-yy'
        });
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
          });
          

      }
      

});