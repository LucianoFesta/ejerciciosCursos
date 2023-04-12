const fs = require('fs');
const path = require('path');

const productos = require('../data/productsDataBase.json');
const productosEliminados = require('../data/productosEliminados.json');    

let controller = {
    list: (req,res) => {
        res.render('products', {
            productos: productos
        });
    },

    detail: (req,res) => {
        let id = Number(req.params.id);
        let productoSeleccionado = productos.find(productoActual => productoActual.id == id);
        let precioDescuento;
        if(productoSeleccionado.discount !=0){
            precioDescuento = productoSeleccionado.price - (productoSeleccionado.price * (productoSeleccionado.discount/100));
        }else{
            precioDescuento = productoSeleccionado.price;
        }

        res.render('detail', {
            title: productoSeleccionado.name,
            precioDescuento,
            producto: productoSeleccionado
        });
    },

    create: (req,res) => {
        res.render('product-create-form');
    },

    processCreate: (req,res) =>{
        
        const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productsDataBase.json')));

        let nuevoProducto = {
            id: productos.length + 1,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            image: req.file.filename,
            category: req.body.category
        };

        productos.push(nuevoProducto);

        const productosJSON = JSON.stringify(productos, null, " ");

        fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), productosJSON);

        res.redirect('/');
    },

    edit: (req,res) => {
        const id = Number(req.params.id);
        const productoEditar = productos.find(productoActual => productoActual.id == id);
        res.render('product-edit-form', {
            producto: productoEditar,
            title: 'Editando: ' + productoEditar.name
        });
    },

    processEdit: (req,res) => {
        //res.send(req.body);
        const id = Number(req.params.id);

        let productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productsDataBase.json')));

        let productosRestantes = productos.filter(producto => producto.id != id);
        let productoEditar = productos.find(producto => producto.id == id);

        let image;
        if(req.file == undefined){
            image = productoEditar.image;
        }else{
            image = req.file.filename;
        }

        productoEditar = {
            id: productoEditar.id,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            image: image,
            category: req.body.category
        }

        productosRestantes.push(productoEditar);

        let productosRestantesJSON = JSON.stringify(productosRestantes, null, " ");

        fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), productosRestantesJSON);

        res.redirect(`/products/detail/${productoEditar.id}`);
    },

    delete: (req,res) => {
        const id = Number(req.params.id);

        let productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productsDataBase.json')));
        const productosEliminados = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productosEliminados.json')));

        let productosRestantes = productos.filter(productoActual => productoActual.id != id);
        let productoEliminado = productos.find(producto => producto.id == id);

        productosEliminados.push(productoEliminado);

        let productosRestantesJSON = JSON.stringify(productosRestantes, null, " ");
        let productosEliminadosJSON = JSON.stringify(productosEliminados, null, " ");

        fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), productosRestantesJSON);
        fs.writeFileSync(path.join(__dirname, '../data/productosEliminados.json'), productosEliminadosJSON);

        res.redirect('/');
    }

}



module.exports = controller;