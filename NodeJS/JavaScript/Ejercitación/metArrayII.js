// METODO MAP - Ejecuta un codigo para cada elemento del array.

let notas = [10, 2, 5, 8, 9, 6];

let notasPor10 = notas.map(function(nota){
    return nota * 10;
})

//console.log(notasPor10);

const dobles = notas.map(notaActual => {
    return notaActual * 2;
})

//console.log(dobles);




// METODO FILTER - Aplica una condicion, devolviendo array con los datos que cumplan esa condicion.

let aprobados = notas.filter(nota => {
    return nota >= 7;
})

//console.log(aprobados);




// METODO REDUCE - Suma los elementos, recibe 2 parametros, el acumulador y un numero.

let sumaNotas = notas.reduce((estado, numero) => {
    return estado + numero;
})

//console.log(sumaNotas);




// METODO FOREACH - Realizamos algo para cada uno de los elementos del array

notas.forEach(function(valor, indice){
   // console.log(`En la posicion ${indice + 1} esta el número ${valor}`);
})

let numeros = [1, 2, 3, 4, 5];

numeros.forEach(numeroActual => {
    //console.log(numeroActual);
})


let usuarios = [
    {
        nombre: 'Nombre1',
        apellido: 'Apellido1',
        edad: 16
    },
    {
        nombre: 'Nombre2',
        apellido: 'Apellido2',
        edad: 18
    },
    {
        nombre: 'Nombre3',
        apellido: 'Apellido3',
        edad: 17
    }
]

usuarios.forEach((usuarioActual, index) =>{
    let mensaje = `${index} - ${usuarioActual.nombre} ${usuarioActual.apellido} `;

    if(usuarioActual.edad >= 18){
        mensaje = mensaje + 'es mayor de edad.'
    }else{
        mensaje = mensaje + 'es menor de edad.'
    }

    //console.log(mensaje);
})








// Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados para acordar 
// un recuperatorio. Por lo tanto, necesitamos dos listas: 
// una lista que almacene todos los aprobados y otra los desaprobados. 
// Deberemos guardarlos en las variables aprobados y desaprobados respectivamente.

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let desaprobados = estudiantes.filter(function(estudiantes){
    return estudiantes.aprobado === false;
})

//console.log(desaprobados);

let aprobado = estudiantes.filter(function(estudiantes){
    return estudiantes.aprobado === true;
})

//console.log(aprobado);



// Nos dejaron una lista con los horarios de partida de algunos aviones. Esta lista se reproduce directamente en las 
// pantallas del aeropuerto y, a modo de travesura, queremos adelantar una hora cada partida. Nuestro trabajo será 
// utilizar el método map para poder lograrlo y almacenar la lista en una variable nueva llamada horariosAtrasados.

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(hora){
    return hora - 1;
})

//console.log(horariosAtrasados);




// Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una maratón.

// Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.

let vueltas = [5, 8, 12, 3, 22];

let sumaVueltas = vueltas.reduce(function(vuelta, acumulador){
    return vuelta + acumulador;
})

//console.log(sumaVueltas);




// Para este ejercicio tenemos el array listaDeSupermercado. Nuestro trabajo será mostrar cada ítem de esa lista por 
// consola utilizando un foreach.

let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

let itinerarListaSuper = listaDeSuperMercado.forEach(function(elementos){
//    console.log(elementos);
})





