let nombres = require('./nombres');

function buscarNombre(indice){
    let nombreBuscado = nombres [indice];

    if(nombreBuscado){
        return nombreBuscado;

    } else{
        return 'XXXXXXXXX';
    }
}

module.exports = buscarNombre;

buscarNombre(1);