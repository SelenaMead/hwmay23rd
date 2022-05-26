const express = require("express")
const res = require("express/lib/response")
const app = express()
const port = 3000
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/templates/views/'))

app.get('/', (req, res) => {
   
    // all route functionality goes here 
    res.render('index')
})
app.get('/profile', (req, res) => {
   
    // all route functionality goes here 
    res.render('profile')
})
app.get('/login', (req, res) => {
   
    // all route functionality goes here 
    res.render('login')
})
app.get('/register', (req, res) => {
   
    // all route functionality goes here 
    res.render('register')
})
app.get('/user', (req, res) => {
   
    // all route functionality goes here 
    res.render('user')
})
// dynamic urls 

app.listen(port, () =>{
    console.log(`server started at port ${port}`)
})
