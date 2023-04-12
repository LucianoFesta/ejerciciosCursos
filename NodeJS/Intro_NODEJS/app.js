let buscarNombre = require('./buscarNombre');
let agregarNombre = require('./agregarNombre');

function saludar(indice){
    console.log(`Hola ${buscarNombre(indice)}.`);

}

agregarNombre('Hugo');
saludar(4);


