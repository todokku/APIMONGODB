'use strict'

//recuperamos el modelo
let ModelCategory = require('../models/categoria');

let controllerCategory = {
    saveCategory: function (req, res) {
        let categoria = new ModelCategory();
        let params = req.body;
        categoria.nombre = params.nombre;
        categoria.estado = params.estado;

        /**
         * guardamos en la base de datos, y controlamos las acciones que se den 
         * en el callback
         */
        categoria.save((err, categoriaStored) => {
            if (err) return res.status(500).send({ message: "Error el registrar el documento." });
            if (!categoriaStored) return res.status(404).send({ message: "Error el registrar la categoria." });

            return res.status(200).send({ categoria: categoriaStored, message: "La categoria ha sido registrada exitosamente." });
        });
    },
    editCategory: function (req, res) {
        let idCategoria = req.params.idcategoria;
        let dataUpdate = req.body;

        //actualizando el registro
        /**
         * new:true, se pasa para recuperar el registro ya actualizado
         */
        ModelCategory.findByIdAndUpdate(idCategoria, dataUpdate, { new: true }, (err, categoriaUpdate) => {
            if (err) return res.status(500).send({ message: "Error el actualizar el documento." });
            if (!categoriaUpdate) return res.status(404).send({ message: "La categoría no se ha podido actualizar." });
            return res.status(200).send({ categoria: categoriaUpdate, message: "La categoría ha sido actualizada exitosamente." });
        });

    },
    deleteCategory: function (req, res) {
        let idCategoria = req.params.idcategoria;
        ModelCategory.findByIdAndRemove(idCategoria, (err, categoriaDelete) => {
            if (err) return res.status(500).send({ message: "La marca no ha sido eliminada." });
            if (!categoriaDelete) return res.status(404).send({ message: "La categoría no se puede eliminar." });
            return res.status(200).send({ categoria: categoriaDelete, message: "La categoría ha sido eliminada exitosamente." });
        });
    },
    retriewCategory: function (req, res) {
        //capturamos el parametro solicitadi
        let idCategoria = req.params.idcategoria;
        //validamos que el parametro no sea nulo
        if (idCategoria == null) return res.status(404).send({ message: "La categoría solicitada no existe." });
        //solicitamos el dato
        ModelCategory.findById(idcategoria, (err, categoria) => {
            if (err) return res.status(500).send({ message: "Error al recuperar los datos de la categoría." });
            if (!categoria) return res.status(404).send({ message: "La categoría solicitada no existe." });
            return res.status(200).send({ categoria });
        });
    },
    listCategories: function (req, res) {
        ModelCategory.find({}).exec((err, listcategories) => {
            if (err) return res.status(500).send({ message: "Error al listar los datos." });
            if (!listcategories) return res.status(404).send({ message: "No hay proyectos a mostrar." });
            return res.status(200).send({ listcategories });
        });
    },
    uploadImage: function (file) {

    }
};

module.exports = controllerCategory;