require('dotenv').config()
const express = require('express')
const request = require('request')
const app = express()

app.get('/', function(req, res) {
  token = process.env.ACCESS_TOKEN
  request("https://api.flypaythis.com/v2/location/92/menu?accessToken=" + token, function(error, response, body) {
    res.json(JSON.parse(body))
  })
})

app.listen(3000, () => console.log('Lisening on port 3000'))

module.exports = app;
