#!/usr/bin/env node

import {app} from '../app'
var debug = require('debug')('node:server')
var http = require('http')

let appServerPort = normalizePort(process.env.HTTP_PORT || '3001')
let appHttpServer = http.createServer(app)

appHttpServer.listen(appServerPort)
appHttpServer.on('error', onError)
appHttpServer.on('listening', onListening)

function normalizePort (val) {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  var bind = typeof appServerPort === 'string'
    ? 'Pipe ' + appServerPort
    : 'Port ' + appServerPort

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
    default:
      throw error
  }
}

function onListening () {
  var addr = appHttpServer.address()
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'appServerPort ' + addr.appServerPort
  debug('Listening on ' + bind)
}
