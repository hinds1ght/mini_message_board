const express = require('express')
const indexRouter = express.Router()

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
indexRouter.get('/', (req, res, next)=>{
    res.render("index", { title: "Mini Messageboard", messages: messages, link: '/new' })
})

indexRouter.get('/new', (req, res)=>{
    res.render('form')
})

indexRouter.post('/new', (req, res)=>{
    messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
    res.redirect('/')
})

module.exports = indexRouter