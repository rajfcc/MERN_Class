
const express = require('express')
const app = express()
app.use(express.json())
const port = 8000
let data = []

app.get('/',(req,res)=>{
    res.send(data)
})

app.post('/',(req,res)=>{
    data.push(req.body)
    res.status(201).send(data)
})

app.post('/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    res.status(202).send(req.body.name+" "+id)
})

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})