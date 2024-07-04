'use strict'

/**
 * @Author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Core Https server
 */

const C = require('../config'), FS = require('node:fs')

module.exports = {
  createHttpsServer: () => {
    const OPTS = {
      key: FS.readFileSync(C.SERVER.SSL.KEY_PATH),
      cert: FS.readFileSync(C.SERVER.SSL.CERT_PATH)
    }
  
    const S = require('node:https').createServer(OPTS, require('./express').createServer())

    console.log('HTTPS initialized!')

    S.listen(C.SERVER.HTTPS_PORT, () => { console.log(`HTTPS server started on port: ${S.address().port}`) })

    return S
  }
}
