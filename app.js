// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
//app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello NodeJS!!!</h1>")
})

module.exports = app;
