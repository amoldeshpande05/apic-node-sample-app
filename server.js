const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/add', (req, res) => {

    let param1 = req.query.param1;
    let param2 = req.query.param2;
    console.log("Request add : param1  : ",param1," param2  : ",param2)
    let result = parseInt(param1) + parseInt(param2)
    res.json({result: result+''})
  })


app.get('/sub', (req, res) => {
    let param1 = req.query.param1;
    let param2 = req.query.param2;
    let result = parseInt(param1) - parseInt(param2)
    res.json({result: result+''})
})

app.get('/mul', (req, res) => {
    let param1 = req.query.param1;
    let param2 = req.query.param2;
    let result = parseInt(param1) * parseInt(param2)
    res.json({result: result+''})
  })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//oc deployment backup
// oc create deployment sample-node-app --image=amoldeshpande/sample-node-app:latest
// oc expose deployment sample-node-app --type="NodePort" --port=8080
// oc expose service sample-node-app
// oc get routes



// oc apply -f deployment.yaml
// oc apply -f service.yaml
// oc apply -f route.yaml
// oc get routes