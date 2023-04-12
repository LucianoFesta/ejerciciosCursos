//Funciones que pasamos como parametros a otra funcion.

function generarNombre(persona){
    return `${persona.nombre} ${persona.apellido}`;
}

const saludarUsuario = (usuario, callback) => {
    const nombreCompleto = callback(usuario);

    console.log(`Hola ${nombreCompleto}`);
}

const usuario = {
    nombre: 'Luciano',
    apellido: 'Festa'
}

//saludarUsuario(usuario, generarNombre);

const timeoutFunction = () => {                       //Almaceno en un variable una funcion, que ejecuta otra para poder pasarlo por el time out.
    saludarUsuario(usuario, generarNombre);
}

setTimeout(timeoutFunction, 1000);                    //Ejecuta una funcion en un determinado tiempo.

setTimeout( () => {                                   //Paso una funcion anonima sin tener que refereciar una creada anteriormente.
    saludarUsuario(usuario, generarNombre);
} , 1000);

//------------------------------------------------------------------------------------


let sumar = (num1, num2) => num1 + num2;
let restar = (num1, num2) => num1 - num2;
let multiplicar = (num1, num2) => num1 * num2;
let dividir = (num1, num2) => num1 / num2;

let calculadora = (num1, num2, operacion) => operacion(num1, num2);

console.log(calculadora(18, 15, sumar));




// Vamos a crear tres funciones y ver cómo empezar a trabajar con callbacks.

// La primera función se llamará doble. Esta recibirá un número y retornará el doble.
// La segunda función se llamará triple. Esta recibirá un número y retornará el triple.
// La tercera función se llamará aplicarCallback y recibirá por parámetro un numero y una función. 

// Esta retornará el valor de aplicar dicha función al valor que recibió.

let doble = num1 => num1 * 2;
let triple = num1 => num1 * 3;
let aplicarCallback = (num1, funcion) => funcion(num1);

console.log(aplicarCallback(10, doble));
console.log(aplicarCallback(10, triple));




// Vamos a ejecutar una función que recibimos por parámetro a cada uno de los elementos de un array. 
// Para esto debemos completar la función procesar. Esta recibe dos parámetros:

// 1. El primer parámetro es un array.

// 2. El segundo parámetro que recibe es una función (al que solemos llamar callback).

// La función deberá retornar un array donde cada elemento es el resultado de aplicar la función pasada 
// a un elemento del array pasado.

let agregarHttp = url => 'http://' + url;

function procesar(miArray, agregarHttp){
    let array = [];

    for(let i = 0; i < miArray.length; i++){
        array.push(agregarHttp(miArray[i]));
    }

    return array;
}

console.log(procesar(["www.google.com.ar", "www.yahoo.com.ar"], agregarHttp));




