const mongoose = require('mongoose');

const Schema = mongoose.Schema
const bookingSchema = new Schema({

    id: Number,

    Title: String,
    Year: String,
    Runtime: String,
    seat: String,
    time: String,
    status: String,
    isBooked: Boolean



})
module.exports = mongoose.model('book', bookingSchema, 'books');