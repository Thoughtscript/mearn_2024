'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Public API.
 */

const express = require('express'),
  publicApi = express.Router(),

  WT = require('../thread'),
  E = require('../services/EventService')

publicApi

  // https://localhost:8888/api/events
  .get("/events", async (req, res) => {
    const responseData = await E.SCAN()
    return res.send({ status: 200, data: JSON.stringify(responseData) })
  })

  // https://localhost:8888/api/event/507f1f77bcf86cd799439011
  .get("/event/:id", async (req, res) => {
    const id = req.params.id
    const responseData = await E.GET_ONE(id)
    return res.send({ status: 200, data: JSON.stringify(responseData) })
  })

  // https://localhost:8888/api/events
  .post("/event", async (req, res) => {
    const body = req.body
    const responseData = await E.CREATE_ONE(body.name, body.msg )
    return res.send({ status: 200, data: JSON.stringify(responseData) })
  })

  // https://localhost:8888/api/event/507f1f77bcf86cd799439011
  .put("/event/:id", async (req, res) => {
    const id = req.params.id, body = req.body
    const responseData = await E.UPDATE_ONE(id, body.name, body.msg )
    return res.send({ status: 200, data: JSON.stringify(responseData) })
  })

  // https://localhost:8888/api/event/507f1f77bcf86cd799439011
  .delete("/event/:id", async (req, res) => {
    const id = req.params.id
    const responseData = await E.DELETE_ONE(id)
    return res.send({ status: 200, data: JSON.stringify(responseData) })
  })

  // https://localhost:8888/api/cmd
  .post("/cmd/", async (req, res) => {
    WT.executeServiceUsingThread('./thread/workerOne/worker_script_one.js', "Hello!")
    WT.executeServiceUsingThread('./thread/workerTwo/worker_script_two.js', "TESTING")
    WT.executeServiceUsingThread('./thread/workerThree/worker_script_three.js', "Test Three")

    return res.send({ status: 201, data: "Delegating Tasks to Thread Workers..." })
  })


console.log(`Public API initialized`)

module.exports = publicApi
