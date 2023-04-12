let cursos = ['Programación', 'Marketing Digital', 'Data Science'];

let [programacion, mkt] = cursos;  //En Array puedo poner cualquier nombre a las variables y se respeta el orden del array original.

//console.log(cursos);
//console.log(mkt);



let personas = {
    nombre: 'Lucho',
    apellido: 'festa',
    direccion: 'Marconi 843'
};

let {nombre, direccion} = personas;   //En objetos tengo que poner el nombre exacto de la propiedad.

//console.log(nombre);



// Para este ejercicio contamos con un array de destinos del mundo ya definido.

// Queremos, usando destructuramiento, definir las variables bariloche y china, y extraer del array únicamente 
// los destinos "Bariloche" y "China".

let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];

let [ , Barilo, , China, ] = destinosDelMundo;

//console.log(destinosDelMundo);
//console.log(Barilo);



// Para este ejercicio contamos con un objeto literal auto ya definido.

// Queremos, usando desestructuramiento, definir las variables marca y color, haciendo que las mismas tengan el valor 
// correspondiente del objeto literal.

let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};

let {marca, color} = auto;

console.log(marca + color);

