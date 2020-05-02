'use strict'

let mongoose=require('mongoose');
let Schema=mongoose.Schema;

let CategoriaSchema=Schema({
    nombre:String,
    estado:Number
});

module.exports=mongoose.model('Categoria',CategoriaSchema);