const mongoose = require('mongoose');

const Schema = mongoose.Schema

const personelSchema = new Schema({
    email: String,
    password: String
})

module.exports = mongoose.model('personel', personelSchema, 'personel')
