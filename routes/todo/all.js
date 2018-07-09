'use strict';

/**
 * Import ToDo schema
 */
const ToDo = require('../../databases/models/todo')

module.exports = (_, res) => {
    ToDo.find({}, (err, docs) => {
        if (err) {
            res.json({
                success: false,
                message: err.message
            })
        } else {
            res.json({
                success: true,
                message: 'Ok',
                response: docs
            })
        }
    })
}
