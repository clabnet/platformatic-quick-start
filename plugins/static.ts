/// <reference path="../global.d.ts" />
import fastifyStatic from "@fastify/static"
import type { FastifyInstance } from "fastify"
import { join } from 'path'

/**
 * Delivery Static Files Fastest with Fastify. This page is accessible at /public/ 
 *
 * @see https://github.com/fastify/fastify-static
 */
export default async function (fastify: FastifyInstance, opts) {

  // const publicPath = join(process.cwd(), "/public")
  // const publicPath = join(fastify.platformatic.configManager.dirname, "/public")
  // console.log("app.platformatic.configManager.dirname", fastify.platformatic.configManager.dirname)

  void fastify.register(fastifyStatic, {
    root: `${fastify.platformatic.configManager.dirname}/public`,
    prefix: "/public",
    decorateReply: true,
    index: false,
    prefixAvoidTrailingSlash: true,
    list: {
      format: 'html',
      render: (dirs, files) => {
        return `
    <html><body>
    <ul>
      ${dirs.map((dir) => `<li><a href="${dir.href}">${dir.name}</a></li>`).join('\n  ')}
    </ul>
    <ul>
      ${files
            .map((file) => `<li><a href="${file.href}" target="_blank">${file.name}</a></li>`)
            .join('\n  ')}
    </ul>
    </body></html>
    `
      }
    }
  })

  // const publicFolder = join(publicPath)
  // fastify.log.debug(`Registered plugin static`)
  // fastify.log.info(`Public folder: ${publicFolder}`)
}
