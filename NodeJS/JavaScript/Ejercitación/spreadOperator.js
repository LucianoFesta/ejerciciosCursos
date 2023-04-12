let peliculasAccion = ['Duro de Matar', 'Rocky V', 'Rambo'];
let peliculasComicas = ['Que paso ayer', 'Mi pobre angelito', 'El grinch'];

let peliculas = [...peliculasAccion, ...peliculasComicas];

//console.log(peliculas);


let generoComedia = {
    nombreGenero : 'Comedia',
    popularidad : 3
}

let miPobreAngelito = {
    nombre : 'Mi Pobre Angelito',
    duracion : 90,
    ...generoComedia
}

let quePasoAyer = {
    nombre : '¿Qué pasó ayer?',
    duracion : 110,
    ...generoComedia
}

//console.log(quePasoAyer);




