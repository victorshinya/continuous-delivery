'use strict';

/**
 * Import ToDo schema
 */
const ToDo = require('../../databases/models/todo')

module.exports = (req, res) => {
    ToDo.findOneAndUpdate({ _id: req.body._id }, { task: req.body.task, status: req.body.status }, (err, doc) => {
        if (err) {
            res.json({
                success: false,
                message: 'Item not found'
            })
        } else {
            res.json({
                success: true,
                message: 'Ok'
            })
        }
    })
}
