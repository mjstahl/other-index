#!/usr/bin/env node

const finalHandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')

const [toServe, port] = (process.argv.length <= 2)
  ? 'index.html'
  : process.argv.slice(2)
const [to, file] = ['./', toServe]
const serve = serveStatic(to, { index: file })

const PORT = port || 8080
const server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalHandler(req, res))
})

server.on('listening', function onConnection () {
  console.log(`Accepting HTTP requests on port ${PORT}.`)
  console.log(`Serving: ${to}${file}`)
})

server.listen(PORT)
