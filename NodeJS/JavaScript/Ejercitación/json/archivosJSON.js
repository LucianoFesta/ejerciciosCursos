// En archivo JSON es la moneda corriente de la comunicación entre programas. Es una especie de objeto literal.
// Como podemos ver en json.json es un objeto todo como string. Para acceder a mi archivo JSON desde JS tenemos que
// usar una librería la cual importamos:

let fileSystem = require('fs');

const personasImportadasJson = fileSystem.readFileSync('./json.json', {encoding: 'utf-8'});  //Hace que leamos archivos fuera del archivo donde estamos parados.

//Ahora para poder utilizarlo en JSON tenemos que convertirlo:

const personasImportadas = JSON.parse(personasImportadasJson);
console.log(personasImportadas);

for(let i = 0; i < personasImportadas.length; i++){
    const personaActual = personasImportadas[i];

    console.log(personaActual.nombre);
}





