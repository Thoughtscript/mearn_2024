#!/usr/bin/env bash

curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X  GET "https://localhost:8888/api/events" --insecure &

curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET "https://localhost:8888/api/event/6685f8f76dd0250b4e863266" --insecure &

curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST "https://localhost:8888/api/event" -d '{"name": "testE", "msg": "msgE"}' --insecure &

curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X PUT "https://localhost:8888/api/event/6685f8f76dd0250b4e863266" -d '{"name": "testE", "msg": "msgE"}' --insecure &

curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X DELETE "https://localhost:8888/api/event/6685f8f76dd0250b4e863266" --insecure &

curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST "https://localhost:8888/api/cmd" --insecure &