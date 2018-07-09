'use strict';

/**
 * Import ToDo schema
 */
const ToDo = require('../../databases/models/todo')

module.exports = (req, res) => {
    const params = req.params
    ToDo.deleteOne({ _id: params._id }, err => {
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
