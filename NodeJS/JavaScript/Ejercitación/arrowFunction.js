//Se declara una variable con el nombre que queremos darle a la funcion e igualamos a una funcion. en parentesis van los parametros
//dentro de las llaver el cuerpo de nuestra funcion


let saludar = (nombre, apellido) => {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Luciano','Festa');



//Si tenemos un solo parametro, no es necesario los parentesis. Y si solo retorna o tenemos 1 sola linea, tampoco las llaves.

let saludarnos = nombre => `Hola ${nombre}`;

console.log(saludarnos('Luciano'));



let personas = [
    {
        nombre: 'Luciano',
        apellido: 'Festa'
    },
    {
        nombre: 'Lucas',
        apellido: 'Festa'
    },
    {
        nombre: 'Analia',
        apellido: 'Viano'
    }
]

let saludarArray = persona => console.log(`Hola ${persona.nombre} ${persona.apellido}`);
saludarArray(personas[0]);

for(let i = 0; i < personas.length; i++){
    saludarArray(personas[i]);
}
