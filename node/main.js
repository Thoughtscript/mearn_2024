'use strict'

/**
 *
 * @Author - Adam In Tae Gerard
 *
 * Main method.
 */

const H = require('./helpers/https')

try {
  process.on('warning', warning => { console.error(`Warning encountered: ${warning}`) })
  process.on('unhandledRejection', rej => { console.error(`Unhandled Rejection override: ${rej}`) })
  process.on('uncaughtException', exception => { console.error(`Error encountered: ${exception}`) })
  process.on('exit', msg => { console.log(`Service shutting down: ${msg}`) })

  // Initialize Main Thread/Process
  require('./domain/Prepopulate').INITIALIZE_DB().then(success => {
      // Spin Up Cluster
      H.createHttpsServer() //cluster tbd
  })

} catch (ex) {
  console.error(`Exception ${ex}!`)

  require('./helpers/mongo').DB_EXIT().then(exitSignal => {
    process.exit()
  })
}