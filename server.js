const express = require("express")
const server = express()

server.get("/", function(req, res) {
    return res.send("Ok, chaguei aqui")
})

server.listen(3000)