const express = require("express");
const path = require("path");
const dotenv = require('dotenv').config();
const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set("view engine", "ejs");


//Permite visualizar la info del formulario cuando renderizamos (req.body).
app.use(express.urlencoded({ extended : true}));
app.use(express.json());

app.use(express.static('public'));

app.use(mainRoutes);

app.use('/products', productRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Servidor abierto en puerto " + process.env.PORT);
});
