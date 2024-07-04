'use strict'

/**
 *
 * @Author - Adam In Tae Gerard
 *
 * Config.
 */

// Note that these correspond to the non-root user/password in docker-compose.yml

// Don't do this in prod!!!
const MONGODB_USERNAME = 'testuser'
const MONGODB_PASSWORD = 'testpass'

module.exports = {
    SERVER: {
        CORS: ['http://localhost:4200', 'http://localhost:1234' ],
        HTTPS_PORT: 8888,
        SSL: {
            KEY_PATH: './auth/key.pem',
            CERT_PATH: './auth/certificate.pem',
        }
    },

    DB: {
        DEFAULT_DB: "testdatabase",
        // Must authenticate against the specified testdatabase with the credentials above
        MONGO_URI: `mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@mongo:27017/testdatabase`
    }
}