require('dotenv').config()
const express = require('express')
const request = require('request')
const app = express()
const port = process.env.PORT || 5000;

app.get('/menu', function(req, res) {
  token = process.env.ACCESS_TOKEN
  request("https://api.flypaythis.com/v2/location/92/menu?accessToken=" + token, function(error, response, body) {
    data = JSON.parse(body)
    res.send(data.menus)
  })
})

app.listen(port, () => console.log('Lisening on port 5000'))

module.exports = app;
