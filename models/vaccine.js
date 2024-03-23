const mongoose = require('mongoose');

const vaccineSchema = new mongoose.Schema({
    date:{
        type: Date,
        require: true,
    },
    producer:{
        type: String,
        required: true,
    }
})
const Vaccine = mongoose.model('Vaccine', vaccineSchema);

module.exports = Vaccine;