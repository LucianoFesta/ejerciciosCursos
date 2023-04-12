let archivoTareas = require('./funcionesDeTarea');



let argumento = process.argv[2];

switch(argumento){
    case 'listar':
        let tareasImportadas = archivoTareas.leerArchivo();   //Llamamos a la función creada dentro del objeto para traer las tareas y luego recorrerlas.

        // for(let i = 0; i < tareasImportadas.length; i++){
        //     console.log(tareasImportadas[i].titulo);
        // };

        tareasImportadas.forEach((tareaActual, index) => {
            console.log(index + 1 + '. ' + tareaActual.titulo + ' - ' + tareaActual.estado)
        });

        break;

    case 'crear':
        let nuevaTarea = {
            titulo: process.argv[3],
            estado: 'pendiente'
        }

        archivoTareas.guardarTarea(nuevaTarea);
        break;

    case 'filtrar':
        let estado = process.argv[3];

        let listaFiltrada = archivoTareas.filtrarPorEstado(estado);

        listaFiltrada.forEach(tarea => console.log(tarea.titulo));

        break;

    case undefined:
        console.log('Atención - Tienes que pasar una acción.');
        break;
    
    default:
        console.log('No entiendo que querés hacer.')

}

