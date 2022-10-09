'use strict'

window.addEventListener('load', function (){
	console.log("¡DOM cargado!");

	var form= document.querySelector("#formulario");
	var nombre = document.querySelector("#nombre");
	var apellidos= document.querySelector("#apellido");
	var edad = document.querySelector("#edad");
	var p_nombre = document.querySelector("#p_nombre span");
	var p_apellidos = document.querySelector("#p_apellidos span");
	var p_edad = document.querySelector("#p_edad span");
	var box_dashed= document.querySelector(".dashed");
	box_dashed.style.display="none";
	var box_dashed2= document.querySelector(".dashed2");
	box_dashed2.style.display="none";
	form.addEventListener('submit',function(){
		console.log("Evento capturado");
		var name=nombre.value;
		var last_name=apellidos.value;
		var age= parseInt(edad.value);
		if(name.trim()==null || name.trim().length==0){
			alert('nombre inválido');
			return false;
		}
		if(last_name.trim()==null || last_name.trim().length==0){
			alert('apellido inválido');
			return false;
		}
		if(age==null || age<=0|| isNaN(age)){
			alert('Edad inválido');
			return false;
		}
		var datos_usuario=[name,last_name,age];
		p_nombre.innerHTML=datos_usuario[0];
		p_apellidos.innerHTML=datos_usuario[1];
		p_edad.innerHTML=datos_usuario[2];
		var indice;
		for(indice in datos_usuario){
			var parrafo=document.createElement("p");
			parrafo.append(datos_usuario[indice]);
			box_dashed.append(parrafo);
		}
		box_dashed.style.display="block";
		box_dashed2.style.display="block";
	});




});// end load
