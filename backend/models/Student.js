const mongoose = require("mongoose")

const studentSchmea = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("student", studentSchmea)