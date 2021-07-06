const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/add', (req, res) => {

    let param1 = req.query.param1;
    let param2 = req.query.param2;
    let result = parseInt(param1) + parseInt(param2)
    res.send(''+result)
  })


app.get('/sub', (req, res) => {
    let param1 = req.query.param1;
    let param2 = req.query.param2;
    let result = parseInt(param1) - parseInt(param2)
    res.send(''+result)
})

app.get('/mul', (req, res) => {
    let param1 = req.query.param1;
    let param2 = req.query.param2;
    let result = parseInt(param1) * parseInt(param2)
    res.send(''+result)
  })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})