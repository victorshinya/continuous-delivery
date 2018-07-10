'use strict';

// https://github.com/Automattic/mongoose
const mongoose = require('mongoose')
// https://github.com/motdotla/dotenv
require('dotenv').config()

/**
 * Connect to a MongoDB
 */
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})

/**
 * Configure MongoDB connection
 */
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))
mongoose.connection.once('open', () => {
    console.log('MongoDB connected')
})

module.exports = mongoose
