const express = require('express');
const dotenv = require('dotenv').config();
const mainRoutes = require('./routers/mainRoutes');

const app = express();
app.use(express.static('public'));

app.listen(process.env.PORT || 3030, () => {console.log('Servidor corriendo en puerto ' + process.env.PORT);});

app.use(mainRoutes);
