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
    },

    DELETE_EVENT: async (id) => {
        let db_collection = await M.COL('Events')
        // Pass the _id into a ObjectId
        const event = await db_collection.deleteOne({_id: new MDB.ObjectId(id)})
        return event
    },

    CREATE_EVENT: async (name, msg) => {
        const obj = { "_id": new MDB.ObjectId(), name: name, msg: msg}
        let db_collection = await M.COL('Events')
        const event = await db_collection.insertOne(obj)
        return event
    },

    UPDATE_EVENT: async (id, name, msg) => {
        let db_collection = await M.COL('Events')
        const filter = { "_id": new MDB.ObjectId(id) }, update = { "$set": { name: name, msg: msg } }
        const event = await db_collection.updateOne(filter, update)
        return event
    }
}
