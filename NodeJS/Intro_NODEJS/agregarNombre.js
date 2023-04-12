let nombres = require('./nombres');

function agregarNombre(nombre){
    nombres.push(nombre);
    console.log(nombres);
}

module.exports = agregarNombre;