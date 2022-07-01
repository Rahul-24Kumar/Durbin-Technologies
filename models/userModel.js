const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: true,
        trim: true
    },

    Phone: {
        type: String,
        required: true,
        trim: true
    },

    Email: {
        type: String,
        required: true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },

    Address: {
        type: String
    },

    WorkExperience: [
        {
            company: { type: String, trim: true },
            position: { type: String, trim: true },
            timeline: { type: Number, trim: true },
            _id: 0
        }
    ],

    Education: {
        type: String
    },

    Certifications: {
        type: String
    },

    Skills: {
        type: String
    },

    Profile: {
        type: String
    },
   })

module.exports = mongoose.model('ResumeDetails', userSchema);