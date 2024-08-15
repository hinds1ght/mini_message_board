const express = require('express')
const app = express()
const path = require("node:path");
const indexRouter = require('./routes/indexRoute')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter)

app.listen(3000,()=>{
    console.log('server up')
})