#!/usr/bin/env bash

echo "executing node script..." && npm run initdb &

echo "start the app..." && npm run start &

wait