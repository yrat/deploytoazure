const mongoose = require('mongoose');

const singersSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    avatar:String,
    description:String,
    songs:[{title:String, year:Number}]});

const contactsSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    subject:String,
    message:String,
    created:Date
});

mongoose.model('singers', singersSchema, 'singers');
mongoose.model('contacts', contactsSchema, 'contacts');