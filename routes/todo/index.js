'use strict';

// https://github.com/expressjs/express
const router = require('express').Router()

/**
 * Import all Endpoints
 */
const create = require('./create')
const all = require('./all')
const single = require('./single')
const update = require('./update')
const remove = require('./delete')

router.post('/', create)
router.get('/', all)
router.get('/:_id', single)
router.put('/', update)
router.delete('/:_id', remove)

module.exports = router
