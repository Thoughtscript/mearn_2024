'use strict'

/**
 *
 * @Author - Adam In Tae Gerard
 *
 * Mongo helpers.
 */

const { MongoClient, BSON } = require("mongodb")
const C = require('../config')
 
// Singleton client and db
let client, db

const getClient = async () => {
    try {
        if (client === undefined) {
            console.log(`Initializing new MongoClient with connection: ${C.DB.MONGO_URI}`)
            client = new MongoClient(C.DB.MONGO_URI)
        }
    } catch (ex) {
        console.error(`Exception encountered: ${ex}!`)
    }

    await client.connect()
    console.log("MongoDB client connected...")
    return await client
}

const getDb = async () => {
    try {
        if (db === undefined) {
            let client = await getClient()
            db = await client.db(C.DB.DEFAULT_DB)
        }
    } catch (ex) {
        console.error(`Exception encountered: ${ex}!`)
    }

    return db
}

module.exports = {
    // Query Collection
    Q_C: async (collection) => {
        let db = await getDb()
        let db_collection = db.collection(collection)
        return await db_collection.find()
    },

    // Find Documents In a Collection by _id
    F_O: async (collection, id) => {
        let db = await getDb()
        let db_collection = db.collection(collection)
        const bid = new BSON.ObjectId(id)
        return await db_collection.find({ _id: bid }).toArray();
    },

    // Create a Collection
    Q_COL: async (collection) => {
        let db = await getDb()
        await db.createCollection(collection)
    },

    /*
     * Helpers
     */

    // Get collection
    COL: async (collection) => {
        let db = await getDb()
        return db.collection(collection)
    },

    // Get client
    C: async () => {
        let client = await getClient()
        return client
    },

    // Ensure the DB connection is closed where needed.
    DB_EXIT: async () => {
        try {
            if (client !== undefined) {
                await client.close()
            }
        } catch (ex) {
            console.error(ex)
        }
        console.log("DB Client closed!")
        return
    }
}
