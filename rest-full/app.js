'use strict'

var express = require('express');
var bodyParser=require('body-parser');

var app = express();

//carga de rutas

const ExpedienteRouter = require('./routers/expediente-router');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// configuracion de cabeceras
//permitiendo 
//permite la configuracion de paginas
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','X-API-KEY, Origin, X-Requested-With,Content-Type,Accept,Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET,POST, OPTIONS, PUT, DELETE');

    next();
});
// rutas base
app.use('/api',ExpedienteRouter);
//app.use('/api',image_routes);


module.exports = app;