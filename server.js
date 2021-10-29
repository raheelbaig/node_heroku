const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.get('/',(req,res) => {
    res.send("this is home page")
})
app.get('/help',(req,res) => {
    res.send("what's problem?")
})
app.get('/contact us',(req,res) => {
    res.send("baig8911@gmail.com")
})

app.listen(port,() => {
    console.log(`http:/localhost:${port}`);
})