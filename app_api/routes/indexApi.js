const express = require('express');
const router = express.Router();

const ctrlApiSingers = require('../controllers/ctrlApiSingers');
const ctrlApiContacts = require('../controllers/ctrlApiContacts');

router
.route('/singers')
.get(ctrlApiSingers.getSingers)
.post(ctrlApiSingers.addSinger);

router
.route('/contacts')
.get(ctrlApiContacts.getContacts)
.post(ctrlApiContacts.addContact);

module.exports = router;