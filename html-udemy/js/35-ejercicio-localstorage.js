'use strict'

var formulario=document.querySelector("#formconferncia");


formulario?.addEventListener('submit', function(){
        console.log("entra");
        var titulo=document.querySelector("#addtema").value;
        if(titulo.length >=1){
            localStorage.setItem(titulo,titulo);
        }    
    
     });

var ul=document.querySelector("#listaconferencia");

for (var i in localStorage){
    console.log(localStorage[i]);
    if(typeof localStorage[i]=='string'){
        var li= document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }

}

var formulariob=document.querySelector("#borraFormconferencia");


formulariob?.addEventListener('submit', function(){
        console.log("entra");
        var titulo=document.querySelector("#borraTema").value;
        if(titulo.length >=1){
            localStorage.removeItem(titulo);
        }    
    
     });
    







