import express from "express"

const app = express()

app.get('/checker', (req, res) => {
    res.send('I see you!!!');
})

app.listen(3000, ()=>{
    console.log('We are live!!!')
})