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

    DELETE_ONE: async (id) => {
        const event = await E.DELETE_EVENT(id)
        return event
    },

    CREATE_ONE: async (name, msg) => {
        const event = await E.CREATE_EVENT(name, msg)
        return event
    },

    UPDATE_ONE: async (id, name, msg) => {
        const event = await E.UPDATE_EVENT(id, name, msg)
        return event
    }
}
