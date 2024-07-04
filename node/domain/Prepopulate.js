'use strict'

/**
 *
 * @Author - Adam In Tae Gerard
 *
 * Prepopulate runner.
 */

const MDB = require('mongodb'),
    M = require('../helpers/mongo'),
    E = require('../domain/Events')

const INSERT_EVENTS = () => new Promise((resolve, reject) => {
    M.COL("Events").then(collection => {
        collection.insertMany(
            [
                E.JSON_OBJ_FACTORY(new MDB.ObjectId(), "testA", "msgA"),
                E.JSON_OBJ_FACTORY(new MDB.ObjectId(), "testB", "msgB"),
                E.JSON_OBJ_FACTORY(new MDB.ObjectId(), "testC", "msgC")

            ]).then(success1 => {
                console.log("Collection initialized with data ...")

                E.FETCH_EVENTS().then(success2 => {
                    console.log(success2)
                    return resolve(success2)
                })
            })
    })
})

module.exports = {
    INITIALIZE_DB: () => new Promise((resolve, reject) => {
        console.log("Initializing DB...")

        M.Q_COL("Events").then(success1 => {
            console.log("Collection initialized ...")

            INSERT_EVENTS().then(success2 => resolve(success2))

        }, reject1 => {
            INSERT_EVENTS().then(success2 => resolve(success2))
        })
    })
}
