// @ts-check
/// <reference path="./global.d.ts"
'use strict'

/** @param {import('fastify').FastifyInstance} app */
module.exports = async (app, opts) => {
    app.log.info("Plugin rapid-doc loaded")

    app.get('/doc', async (req, reply) => {
        return reply.sendFile('/doc.html')
    })

    // app.post('/sum', async (req, reply) => {
    //     const { x, y } = req.body
    //     return { sum: (x + y) }
    // })
}