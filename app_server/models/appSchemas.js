const mongoose = require('mongoose');

const singers = new mongoose.Schema({
    firstname:String,
    lastname:String,
    description:String,
    songs:[{title:String, year:Number}]});

const contacts = new mongoose.Schema({
    firstname:String,
    lastname:String,
    subject:String,
    message:String,
    created:Date
});