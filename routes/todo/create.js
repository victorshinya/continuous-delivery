'use strict';

/**
 * Import ToDo schema
 */
const ToDo = require('../../databases/models/todo')

module.exports = (req, res) => {
    const newTodo = new ToDo()
    newTodo.task = req.body.task
    newTodo.save(err => {
        if (err) {
            res.json({
                success: false,
                message: err.message
            })
        } else {
            res.json({
                success: true,
                message: 'Ok',
                response: newTodo
            })
        }
    })
}
