

var fecha= new Date();

console.log(fecha);

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora= fecha.getHours();

var textHora= `
    El año es: ${year}
    El mes es: ${mes}
    El día es: ${dia}
    La hora es: ${hora}

`;

console.log(textHora);
console.log(Math.ceil(Math.random(6)+5));