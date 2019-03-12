'use strict'

const express = require('express'); 

var ExpedienteController = require('../controllers/expediente-controller');

var api = express.Router();

api.get('/',ExpedienteController.getExpedientes);
api.get('/save',ExpedienteController.saveExpediente);
module.exports = api;