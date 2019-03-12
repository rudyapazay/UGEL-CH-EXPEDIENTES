'use strict'

var ExpedienteModel = require('../models/expediente-model')

function getExpedientes(req,res){
    ExpedienteModel.find({},(err,expedientes)=>{
        if(err){
            res.status(500).send({message:'Error en la peticion'});
        }
        else{
            if(expedientes != null){
                res.status(404).send({message:'No existen expedientes'});
            }
            else{
                res.status(200).send({expedientes});
            }
        }
    });
    
}

function saveExpediente(req,res){
    res.status(200).send({message:'Se guardo los expedientes'});
}

module.exports = {
    getExpedientes,
    saveExpediente
}