'use strict';

// https://github.com/Automattic/mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// https://github.com/drudge/mongoose-timestamp
const timestamp = require('mongoose-timestamp')

/**
 * Define ToDo (MongoDB) schema
 */
const ToDoSchema = new Schema({
    task: {
        type: String,
        required: '"task" field is required to create a new task',
        trim: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Completed', 'In progress', 'Overdue'],
        default: 'Pending'
    }
})

/**
 * Add plugin:
 * - mongoose-timestamp: it adds createdAt and updatedAt fields in this schema
 */
ToDoSchema.plugin(timestamp)

module.exports = mongoose.model('ToDo', ToDoSchema)
