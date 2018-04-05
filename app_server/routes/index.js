var express = require('express');
var router = express.Router();

const ctrlSingers = require('../controllers/ctrlSingers');

/* GET home page. */
router.get('/', ctrlSingers.index);
router.get('/pres', ctrlSingers.pres);
router.get('/list', ctrlSingers.list);
router.get('/addSinger', ctrlSingers.getAddSinger);
router.post('/addSinger', ctrlSingers.postAddSinger);

module.exports = router;
