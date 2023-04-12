const fs = require('fs');
const path = require('path');

const controller = {
    index: (req,res) => {
        res.render('index');

    },
    processIndex: (req,res) => {
        const usuariosJS = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/user.json')));

        if(req.body.recordarColor){
            res.cookie('colorElegido', req.body.color, { expires: new Date(2147483647 * 999999) });
        }

        if(req.body.olvidarColor){
            res.cookie('colorElegido', req.body.color, { maxAge: 1000});
        }

        let nuevoUsuario = {
            nombre: req.body.nombre,
            color: req.body.color,
            email: req.body.email,
            edad: req.body.edad,
            recordarColor: req.body.recordarColor,
            olvidarColor: req.body.olvidarColor
        };

        usuariosJS.push(nuevoUsuario);

        let usuariosJSON = JSON.stringify(usuariosJS, null, ' ');

        fs.writeFileSync(path.join(__dirname, '../data/user.json'), usuariosJSON);

        res.render('user', {
            usuario: nuevoUsuario
        })
        
    },
    user: (req,res) => {
        let usuario;
        const usuariosJS = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/user.json')));
        let usuarioCookie = usuariosJS.find(usuario => usuario.color == req.cookies.colorElegido);

        if(usuarioCookie){
            res.render('user', {
                usuarioCookie: usuarioCookie,
                usuario: usuario
            });
        }else{
            res.redirect('/');
        }

    }
}

module.exports = controller;

//Mantener sesion iniciada, con esto guarda una cookie con el nombre del usuario o el mail. Despues mediante middleare de ruta, chequear si existe la cookie, si existe damos next sino res.redirect.
