'use strict'

let express = require('express');
let ControllerCategory = require('../controllers/categoria');

let router = express.Router();

router.post('/savecategory', ControllerCategory.saveCategory);
router.put('/editcategory/:idcategoria?', ControllerCategory.editCategory);
router.delete('/deletecategory/:idcategoria?', ControllerCategory.deleteCategory);
router.get('/retriewcategory/:idcategoria?', ControllerCategory.retriewCategory);
router.get('/listcategories', ControllerCategory.listCategories);

module.exports = router;