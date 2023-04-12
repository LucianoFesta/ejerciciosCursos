const express = require('express');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const session = require('express-session');                        // 1-Instalamos y requerimos
const cookies = require('cookie-parser');                          // 4-Instalamos y requirimos 
const mainRoutes = require('./routes/mainRoutes');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('tiny'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({                                                  // 2-Lo utilizamos con use. - Pasamos a Controllers a generar alguna variable de session.
    secret: 'Shh, es un secreto',
    resave: false,
    saveUninitialized: false
}));

app.use(cookies());                                                //5- Inicializamos como middleware de app. - Pasamos a controllers.

app.use(mainRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
})


