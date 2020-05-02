'use strict'

let express = require('express');
let ControllerTrademark = require('../controllers/marca');

let router = express.Router();

router.post('/savetrademark', ControllerTrademark.saveTrademark);
router.put('/edittrademark/:idmarca?', ControllerTrademark.editTrademark);
router.delete('/deletetrademark/:idmarca?', ControllerTrademark.deleteTrademark);
router.get('/retriewtrademark/:idmarca?', ControllerTrademark.retriewTrademark);
router.get('/listtrademarks', ControllerTrademark.listTrademarks);

module.exports = router;