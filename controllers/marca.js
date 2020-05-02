'use strict'

//recuperamos el modelo
let ModelTrademark = require('../models/marca');

let controllerTrademark = {
    saveTrademark: function (req, res) {
        let marca = new ModelTrademark();
        let params = req.body;
        marca.nombre = params.nombre;
        marca.estado = params.estado;

        /**
         * guardamos en la base de datos, y controlamos las acciones que se den 
         * en el callback
         */
        marca.save((err, marcaStored) => {
            if (err) return res.status(500).send({ message: "Error el registrar el documento." });
            if (!marcaStored) return res.status(404).send({ message: "Error el registrar la marca." });

            return res.status(200).send({ marca: marcaStored, message: "La marca ha sido registrada exitosamente." });
        });
    },
    editTrademark: function (req, res) {
        let idMarca = req.params.idmarca;
        let dataUpdate = req.body;

        //actualizando el registro
        /**
         * new:true, se pasa para recuperar el registro ya actualizado
         */
        ModelTrademark.findByIdAndUpdate(idMarca, dataUpdate, { new: true }, (err, marcaUpdate) => {
            if (err) return res.status(500).send({ message: "Error el actualizar el documento." });
            if (!marcaUpdate) return res.status(404).send({ message: "La marca no se ha podido actualizar." });
            return res.status(200).send({ marca: marcaUpdate, message: "La marca ha sido actualizada exitosamente." });
        });

    },
    deleteTrademark: function (req, res) {
        let idMarca = req.params.idmarca;
        ModelTrademark.findByIdAndRemove(idMarca, (err, marcaDelete) => {
            if (err) return res.status(500).send({ message: "La marca no ha sido eliminada." });
            if (!marcaDelete) return res.status(404).send({ message: "La marca no se puede eliminar." });
            return res.status(200).send({ marca: marcaDelete, message: "La marca ha sido eliminada exitosamente." });
        });
    },
    retriewTrademark: function (req, res) {
        //capturamos el parametro solicitadi
        let idMarca = req.params.idmarca;
        //validamos que el parametro no sea nulo
        if (idMarca == null) return res.status(404).send({ message: "La marca solicitada no existe." });
        //solicitamos el dato
        ModelTrademark.findById(idMarca, (err, marca) => {
            if (err) return res.status(500).send({ message: "Error al recuperar los datos de la marca." });
            if (!marca) return res.status(404).send({ message: "La marca solicitada no existe." });
            return res.status(200).send({ marca });
        });
    },
    listTrademarks: function (req, res) {
        ModelTrademark.find({}).exec((err, listBrands) => {
            if (err) return res.status(500).send({ message: "Error al listar los datos." });
            if (!listBrands) return res.status(404).send({ message: "No hay proyectos a mostrar." });
            return res.status(200).send({ listBrands });
        });
    },
    uploadImage: function (file) {

    }
};

module.exports = controllerTrademark;