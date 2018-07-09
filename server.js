'use strict';

// https://github.com/expressjs/express
const app = require('express')()
// https://github.com/expressjs/body-parser
const bodyParser = require('body-parser')

/**
 * Configure body parsing middleware
 */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/**
 * Define app port: VCAP/PORT dynamically port or a local (8080)
 */
const port = process.env.VCAP_APP_PORT || process.env.PORT || 8080

/**
 * Start web server using Express.js
 */
app.listen(port, () => {
    console.log('App server is up and running at port ${port}')
})

module.exports = app
