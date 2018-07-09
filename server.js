'use strict';

// https://github.com/expressjs/express
const app = require('express')()
// https://github.com/expressjs/body-parser
const bodyParser = require('body-parser')
// https://github.com/motdotla/dotenv
require('dotenv').config()

/**
 * Configure body parsing middleware
 */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/**
 * Import Mongoose configuration to connect
 */
require('./databases/mongodb')

/**
 * Import all Endpoints
 */
const endpoints = require('./routes')
app.use('/api', endpoints)

/**
 * Define app port: VCAP/PORT dynamically port or a local (8080)
 */
const port = process.env.VCAP_APP_PORT || process.env.PORT || 8080

/**
 * Start web server using Express.js
 */
app.listen(port, () => {
    console.log('App server is up and running at port ' + port)
})

module.exports = app
