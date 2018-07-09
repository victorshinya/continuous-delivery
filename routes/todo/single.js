'use strict';

/**
 * Import ToDo schema
 */
const ToDo = require('../../databases/models/todo')

module.exports = (req, res) => {
    const params = req.params
    ToDo.findById(params._id, (err, doc) => {
        if (err) {
            res.json({
                success: false,
                message: 'Item not found'
            })
        } else {
            res.json({
                success: true,
                message: 'Ok',
                response: doc
            })
        }
    })
}
