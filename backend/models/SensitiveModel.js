const mongoose = require('mongoose');

const SensitiveSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    value: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
       result: {
            type: Number,
            required: true,
            maxLength: 20,
            trim: true
    },   

        category: {
            type: String,
            required: true,
            trim: true,
            maxLength: 50
        },

        date: {
            type: Date,
            required: true,
            trim: true
        },
}, 
{timestamps: true})

module.exports = mongoose.model('SensitivetModel', SensitiveSchema)