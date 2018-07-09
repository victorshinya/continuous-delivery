'use strict';

// https://github.com/expressjs/express
const router = require('express').Router()

/**
 * Import all Endpoints services
 */
const todo = require('./todo')

router.use('/todo', todo)

module.exports = router
