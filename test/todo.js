'use strict';

// https://github.com/chaijs/chai
const chai = require('chai')
chai.should()
const assert = chai.assert
const expect = chai.expect;
// https://github.com/chaijs/chai-http
const chaiHttp = require('chai-http')

/**
 * Import express server for chai-http
 */
const server = require('../server')

/**
 * Add chai-http plugin
 */
chai.use(chaiHttp)

describe('ToDo app', () => {

    var taskId = ''

    describe('POST /', () => {
        it('should create a new task', (done) => {
            chai.request(server)
                .post('/api/todo')
                .send({ task: 'Test task' })
                .end((_, res) => {
                    res.should.have.status(200)
                    assert(res.body.message, 'Ok')
                    assert(res.body.success, true)
                    taskId = res.body.response._id
                    done()
                })
        })
    })

    describe('GET /', () => {
        it('should return 200 status code', (done) => {
            chai.request(server)
                .get('/api/todo')
                .end((_, res) => {
                    res.should.have.status(200)
                    done()
                })
        })
        it('should return "Ok" message and true boolean value on success', (done) => {
            chai.request(server)
                .get('/api/todo')
                .end((_, res) => {
                    assert(res.body.message, 'Ok')
                    assert(res.body.success, true)
                    done()
                })
        })
        it('should contain at least one object created previously', (done) => {
            chai.request(server)
                .get('/api/todo')
                .end((_, res) => {
                    expect(res.body.response).to.be.an('array').that.is.not.empty
                    done()
                })
        })
    })

    describe('GET /:id', () => {
        it('should return Test Task created', (done) => {
            chai.request(server)
                .get('/api/todo/' + taskId)
                .end((_, res) => {
                    res.should.have.status(200)
                    assert(res.body.response._id, taskId)
                    done()
                })
        })
    })

    describe('PUT /', () => {
        it('should update Test Task status', (done) => {
            chai.request(server)
                .put('/api/todo')
                .send({ _id: taskId, status: 'In progress' })
                .end((_, res) => {
                    res.should.have.status(200)
                    assert(res.body.message, 'Ok')
                    done()
                })
        })
    })

    describe('DELETE /:id', () => {
        it('should delete Test Task created previously', (done) => {
            chai.request(server)
                .delete('/api/todo/' + taskId)
                .end((_, res) => {
                    res.should.have.status(200)
                    assert(res.body.message, 'Ok')
                    done()
                })
        })
    })
})
