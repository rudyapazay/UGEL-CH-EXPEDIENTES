'use strict'

const mongoose= require('mongoose');
const Schema =  mongoose.Schema;

var ExpedienteSchema  = Schema({
    title: String,
    name:String,
    date:Date,
    status:String,
    oficina:[]    
});

module.exports= mongoose.model('ExpedienteModel',ExpedienteSchema);