var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/ctrlMain');
const ctrlPres = require('../controllers/ctrlPres');
const ctrlList = require('../controllers/ctrlList');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/pres', ctrlPres.index);
router.get('/list', ctrlList.index);

module.exports = router;
