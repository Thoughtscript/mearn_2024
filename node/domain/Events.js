'use strict'

/**
 *
 * @Author - Adam In Tae Gerard
 *
 * Events domain.
 */

const M = require('../helpers/mongo'),
    MDB = require('mongodb')

var Event = function(id, name, msg) {
    this["_id"] = id
    this.name = name
    this.msg = msg
}

module.exports = {
    OBJ_FACTORY: (id, name, msg) => new Event(id, name, msg),

    JSON_OBJ_FACTORY: (id, name, msg) => ({ "_id": id, name: name, msg: msg}),

    FETCH_EVENTS: async () => {
        const cursor = await M.Q_C('Events')
        
        let events = []

        const A = await  cursor.toArray()
        
        for (let i = 0; i < A.length; i++) {
            const id = A[i]["_id"]
            const name = A[i].name
            const msg = A[i].msg
        
            const ev = new Event(id, name, msg)
            events.push(ev)
        }
    
        return events
    },

    FETCH_EVENT: async (id) => {
        let db_collection = await M.COL('Events')
        // Pass the _id into a ObjectId
        const event = await db_collection.findOne({_id: new MDB.ObjectId(id)})
        return event
    }
}
