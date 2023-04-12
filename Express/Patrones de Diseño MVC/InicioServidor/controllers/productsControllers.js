const  productsModel = require('../models/productsModel');


const productos = [
    {
        id: 1,
        name: 'Producto-1',
        description: 'Descripción-1'
    },
    {
        id: 2,
        name: 'Producto-2',
        description: 'Descripción-2'
    },
    {
        id: 3,
        name: 'Producto-3',
        description: 'Descripción-3'
    },
    {
        id: 4,
        name: 'Producto-4',
        description: 'Descripción-4'
    }
]

const sendAll =  (req,res) => {
    res.send(productos);
}

const sendById = (req,res) => {
    const id = Number(req.params.id);

    const productoSolicitado = productos.find(productoActual => productoActual.id == id);

    if(productoSolicitado){
        res.send(productoSolicitado);
    }else{
        res.send('No se encontró el producto ' + id);
    }
}

const createProducts = (req,res) => {
    const name = req.query.name;
    const description = req.query.description;

    const newProduct = {
        id: productos.length +1,
        name,
        description
    }

    const nuevoArray = productsModel.agregarProducto(productos, newProduct);

    res.send(nuevoArray);
}

const controllers = {
    sendAll,
    sendById,
    createProducts
}

module.exports = controllers;
