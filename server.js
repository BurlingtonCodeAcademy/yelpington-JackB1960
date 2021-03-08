const express = require ('express')
const path = require('path')
const app = express()
//const {response} = require('express')

//this must match paskage.json on the cient side proxy
const port = process.env.PORT || 5000

app.use(express.static('/public'))

//app.use(express.urlencoded({extended: true}))

app.get("/Blue-Paddle", (req, res) => {
    res.sendFile(path.resolve("./api/Blue-Paddle.json"))
})

//app.get("Cook-Sisters", (req, res)=> {
 //   req.sendFile(path.resolve('./api/Cook-Sisters.json'))
//})

//app.get("McKee's", (req, res) => {
 //   response.sendFile(path.resolve('./api/McKees.json'))
//})

//app.get("North-Hero-House", (req, res) => {
//    res.sendFile(path.resolve("./api/North-Hero-House.json"))
//})

//app.get("Pans-Pizza", (req, res)=> {
//    req.sendFile(path.resolve('./api/Pans-Pizza.json'))
//})

//app.get("Shore-Acres", (req, res) => {
//    response.sendFile(path.resolve('./api/Shore-Acres.json'))
//})

//app.get("Victorias", (req, res) => {
//    response.sendFile(path.resolve('./api/Victorias.json'))
//})

app.post( '', (req, res)=> {
    let formInfo = req.body
})


app.listen (5000)