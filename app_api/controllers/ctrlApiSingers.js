const mongoose = require('mongoose');

const singersModel = mongoose.model('singers');

const getSingers = function (req, res) {
    singersModel.find({}, function(err, singers) {
        if (err)
            res.status(404).json(err);
        else
            res.status(200).json(singers);
    });
}

const addSinger = function (req, res) {
    singersModel.create(req.body, function(err, newSinger) {
        if (err)
            res.status(404).json(err);
        else
            res.status(201).json(newSinger);
    });
}

module.exports = {
    getSingers,
    addSinger
};