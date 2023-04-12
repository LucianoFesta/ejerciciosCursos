//Es una forma de escribir un condicional cuando tenemos una sola linea de código y no retorna.

let numero = 15;

if(numero < 18){
    console.log('Es menor.');
}else{
    console.log('Es mayor');
}

numero < 18 ? console.log('Es menor') : console.log('Es mayor');  //Estructura ternaria.




//Llevmoslo un poco mas allá

let esMayor;

// if(numero >= 18){
//     esMayor = true;
// }else{
//     esMayor = false;
// }

esMayor = numero >= 18 ? true : false;
console.log(esMayor);



//Ahora, si tenemos un else if?

if(numero > 18){
    esMayor = true;
}else if (numero === 18){
    esMayor = true;
}else{
    esMayor = false;
}

esMayor = numero > 18 ? true : numero === 18 ? true : false;
console.log(esMayor);



