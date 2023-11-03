// @ts-check
/// <reference path="./global.d.ts"
'use strict'

/** @param {import('fastify').FastifyInstance} app */
module.exports = async (app, opts) => {
    app.log.info("Plugin sample loaded")
    const movies = await app.platformatic.entities.movie.find()
    const movieYears = movies.map(movie => movie.id)
    // app.log.info(movieYears)
}