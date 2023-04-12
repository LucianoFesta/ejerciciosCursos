const productos = require('../data/productsDataBase.json');

let controller = {
    index: (req,res) => {
        res.render('index', {
            productos
        });
    }
}

module.exports = controller;