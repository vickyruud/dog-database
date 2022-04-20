const express = require('express')
const app = express()
const port = 5000
const axios = require('axios');

const key = process.env.API_KEY

app.get('/getdogs', (req, res) => {
  const API = `https://api.thedogapi.com/v1/breeds?api_key=${key}`;
  axios(API)
    .then(response => {
      res.json(response.data)
    }).catch(err => {
      res.send('errr!!!')
    })
})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))