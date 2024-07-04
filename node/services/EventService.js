'use strict'

/**
 *
 * @Author - Adam In Tae Gerard
 *
 * EventService.
 */

const E = require('../domain/Events')

module.exports = {
    SCAN: async () => {
        const events = await E.FETCH_EVENTS()
        return events
    },

    GET_ONE: async (id) => {
        const event = await E.FETCH_EVENT(id)
        return event
    },
}
