'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Express server.
 */

const express = require('express'),
  C = require('../config').SERVER

module.exports = {
  createServer: () => {
    const app = express()

    app
      .use(require('morgan')('dev'))
      .use(express.json())
      .use(express.urlencoded({ extended: true }))

      .use(require('cookie-parser')())

      // Set CORS
      .use(require('cors')({
        origin: C.CORS,
        optionsSuccessStatus: 200
      }))
      
      .use('/api', require('../controllers/api'))

    return app
  }
}
