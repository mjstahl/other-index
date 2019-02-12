#!/usr/bin/env node

const finalHandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')

const to = './'
const [file, port] = (process.argv.length <= 2)
  ? ['index.html', 8080]
  : process.argv.slice(2)
const serve = serveStatic(to, { index: file })
const server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalHandler(req, res))
})

server.on('listening', function onConnection () {
  console.log(`Accepting HTTP requests on port ${port}.`)
  console.log(`Serving: ${to}${file}`)
})

server.listen(port)
