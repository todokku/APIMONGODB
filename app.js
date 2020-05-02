'use strict'
//este archivo app nos servira para la configuración de express
let express = require('express');
let bodyparse = require('body-parser');

let app = express();

//cargar archivos de rutas
let RoutesTrademark = require('./routes/marca');
let RoutesCategory = require('./routes/categoria');

//middlewares
app.use(bodyparse.urlencoded({ extended: false }));
app.use(bodyparse.json());

//Configuración de las cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas
app.use('/libreria', RoutesTrademark);
app.use('/libreria', RoutesCategory);


//exportando
module.exports = app;