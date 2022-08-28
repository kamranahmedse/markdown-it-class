#!/bin/bash

echo '{ "private": true }' > package.json
npm i markdown-it markdown-it-attrs markdown-it-class --save
node sample.js
