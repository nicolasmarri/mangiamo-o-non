"use strict"

const fs = require("fs")

const file = fs.readFileSync("./response.json").toString()

const data = JSON.parse(file).records.length

console.log(data)