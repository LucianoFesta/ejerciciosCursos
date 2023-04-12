const usuario1 = {
    nombre: 'Nacho',
    apellidos: ['aaaa', 'bbb'],
    email: 'ignacio123123@gmail.com',
    locacion: {
        calle: 'Calle1',
        altura: 1
    }
};

const usuario2 = {
    nombre: 'Lucho',
    apellidos: ['Festa', 'Viano'],
    email: 'lucho@gmail.com',
    locacion: {
        calle: 'Calle2',
        altura: 2
    }
};

const usuario3 = {
    nombre: 'Pedro',
    apellidos: ['Objeto', 'Literal'],
    email: 'pedro1234@gmail.com',
    locacion: {
        calle: 'Calle3',
        altura: 3
    }
};

let usuarios = [usuario1, usuario2, usuario3];

for(let i = 0; i < usuarios.length; i++){

    console.log('El nombre del usuario ' + (i+1) + ' es: ' + usuarios[i].nombre);
}
