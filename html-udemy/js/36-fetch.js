'use strict'

// Fetch (ajax) y peticiones y servicios / apis rest

var div_user=document.querySelector("#usuarios");
var div_user2=document.querySelector("#usuarios2");
var div_user3=document.querySelector("#usuarios3");
var div_janet=document.querySelector("#janet");
var div_diplomado=document.querySelector("#diplomado");
var users= [];
var users2=[];
var user3=[];

// con lo siguiente hacemos promesas y obtenemos el json
fetch('https://reqres.in/api/users')
.then(data=> data.json())
.then(data =>{
    users=data;
    console.log(users);
})

//Muchas veces solo queremos la data no mas, entonces hacemos el siguiente cambio

fetch('https://reqres.in/api/users')
.then(data=> data.json())
.then(data =>{
    users2=data.data;
    console.log(users2);
    users2.map((user,i)=>{
        let nombre=document.createElement('h3');
        nombre.innerHTML=i+". "+user.first_name+" "+user.last_name;
        div_user.appendChild(nombre);
        div_user.querySelector(".loading").style.display="none";
    });
});


// Podemos reducir todo el código anterior usando funciones y lo hace más legible

fetch('https://reqres.in/api/users')
.then(data=> data.json())
.then(data =>{
    listadoUsuario(data.data)
    
});



function listadoUsuario(user3){
    user3.map((userr,i)=>{
        let nombre2=document.createElement('h3');
        nombre2.innerHTML=i+". "+userr.first_name+" "+userr.last_name;
        div_user2.appendChild(nombre2);
        div_user2.querySelector(".loading").style.display="none";
    });

}

//
//Ahora podemos reescribir todo lo anterior encapsulando en funcinones y usando promesas... leer sobre esto


function getUsuarios(){
    return fetch('https://reqres.in/api/users');
}

getUsuarios()
.then(data=> data.json())
.then(data =>{
    listadoUsuario2(data.data)
    return getInfo();
    
})
.then(data =>{
    console.log(data)
    div_diplomado.innerHTML=data;
    return getJanet();
})
.then(data => data.json())
.then(janet =>{
    mostrarJanet(janet.data)

    
})
.catch(error=>{
    console.log(error+'ffdf');
    alert('La url no existe');
});

function listadoUsuario2(user3){
    user3.map((userr,i)=>{
        let nombre2=document.createElement('h3');
        nombre2.innerHTML=i+". "+userr.first_name+" "+userr.last_name;
        div_user3.appendChild(nombre2);
        div_user3.querySelector(".loading").style.display="none";
    });

}

//

//Ahora crearemos un función que busque solo un usuario

function getJanet(){
    return fetch('https://reqres.in/api/users/2');
}

function mostrarJanet(userr){
    let nombre2=document.createElement('h4');
    let avatar=document.createElement('img');
    avatar.src=userr.avatar;
    avatar.width='100';
    nombre2.innerHTML=userr.first_name+" "+userr.last_name;
    div_janet.appendChild(nombre2);
    div_janet.appendChild(avatar);
    div_janet.querySelector("#janet .loading").style.display="none";
    

}

// Ahora crearemos una promesa dentro de una función

function getInfo(){
    var diplomado={
        titulo:"Métodos de Machine Learning",
        inicio:"20 de mayo de 2022",
        fin: "20 de agosto de 2022"
    };

    return new Promise((resolve,reject)=>{
        var diplomado_string="";


        setTimeout(function(){
             diplomado_string=JSON.stringify(diplomado);
             if(typeof diplomado_string != 'string' || diplomado == "") return reject('error 1');

            return resolve(diplomado_string);


        },3000);


    });


}