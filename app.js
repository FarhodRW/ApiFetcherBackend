const { default: axios } = require('axios')
const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const Api = require('./model')
const app = express()



//express middlewares
app.use(express.json())
app.use(cors())



//connecting to database
mongoose.connect('mongodb://localhost:27017/api')
  .then(() => console.log('Connected to database'))
  .catch(() => console.log("Can't connect to the database"))

mongoose.set('debug', true)




//Fetch and save data to database
const url = 'https://api.publicapis.org/entries'

async function fetchApi() {
  const response = await axios.get(url)

  const apis = Api.create(response.data.entries)
  return apis
}
fetchApi()


//send data 
app.get('/data', async (req, res) => {

  const data = await Api.find()
  res.send(data)
  console.log(data)

})



const port = 3002
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})