const mongoose = require('mongoose');

const contactsModel = mongoose.model('contacts');

const getContacts = function (req, res) {
    contactsModel.find({}, function(err, contacts) {
        if (err)
            res.status(404).json(err);
        else
            res.status(200).json(contacts);
    });
}

const addContact = function (req, res) {
    contactsModel.create(req.body, function(err, newContact) {
        if (err)
            res.status(404).json(err);
        else
            res.status(201).json(newContact);
    });
}

module.exports = {
    getContacts,
    addContact
};