const mongoose = require("mongoose");

const Statistic = mongoose.model('Statistic', {
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        minlength: 1,
    },
    category: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    xAxis: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    yAxis: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    data: [],
})

module.exports = { Statistic };
