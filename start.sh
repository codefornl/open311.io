#!/bin/bash

sed -i "s^__NODE_ENV__^$NODE_ENV^g" /open311/build/config.json

cd /api
npm start
