let fs = require("fs");

let tareasJson = fs.readFileSync("./tareas.json", {encoding: "utf-8"});

let tareas = JSON.parse(tareasJson);



let accion = process.argv[2];

switch (accion){
    case 'listar':
        for(let i = 0; i < tareas.length; i++){
            console.log(tareas[i].titulo);
        }
        break;

    case undefined:
        console.log('Atención, tienes que pasar una acción');
        break;
    
    default:
        console.log('No entiendo que quieres hacer');
        break;
}

module.exports = tarea;


