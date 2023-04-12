let fs = require('fs');

let archivoTareas = {

    archivo: 'tareas.json',

    leerArchivo: () => {
        let tareasImportadasJson = fs.readFileSync('./tareas.json', {encoding: 'utf-8'});
        let tareasImportadas = JSON.parse(tareasImportadasJson);

        return tareasImportadas;
    },

    escribirJson: (array) => {
        let arrayJson = JSON.stringify(array);                       //Metodo que pasa de js a json.
        fs.writeFileSync('./tareas.json', arrayJson, 'utf-8');       //Metodo del modulo fs que permite esrcibir en json.

    },

    guardarTarea: tarea => {
        let tareas = archivoTareas.leerArchivo();                    //Leemos las tareas del archivo y las guardamos en tareas.

        tareas.push(tarea);                                          //Agregamos la tarea nueva a tareas que ya tenemos.                           
        archivoTareas.escribirJson(tareas);                          //Escribimos en array nuevo en tareas.json.

    },

    filtrarPorEstado: estado => {
        let tareas = archivoTareas.leerArchivo();

        let estadoActual = tareas.filter((persona) => persona.estado === estado);

        return estadoActual;
    }
}


module.exports = archivoTareas;