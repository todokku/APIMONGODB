'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MarcaSchema = Schema({
    nombre: String,
    estado: Number
});

module.exports = mongoose.model('Marca', MarcaSchema);