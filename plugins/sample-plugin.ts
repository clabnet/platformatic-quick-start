// @ts-check
/// <reference path="./global.d.ts"
'use strict'

/** @param {import('fastify').FastifyInstance} app */
module.exports = async (app, opts) => {
    app.log.info("Plugin loaded")
    // app.post('/sum', async (req, reply) => {
    //     const { x, y } = req.body
    //     return { sum: (x + y) }
    // })

    const movies = await app.platformatic.entities.movie.find()
    const movieYears = movies.map(movie => movie.year)
    app.log.info(movieYears)

}