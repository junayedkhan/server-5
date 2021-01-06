const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const publics = []
//handlebars
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
//bodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//get handle
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/allpublic', (req, res) => {
    res.render('public', {
        publics
    })
})
//post handle
app.post('/public', (req, res) => {
   const {email, password} = req.body
   const public = {email:email, password:password}
   publics.push(public)
   res.redirect('/allpublic')
})

app.listen(port, console.log('server runing '+port))