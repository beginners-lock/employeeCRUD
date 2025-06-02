import express from "express"
import { employeeRouter } from "./routes/employee"
import cors from 'cors'
import bodyParser from "body-parser"

const app = express()

app.use(cors({ origin: '*' }))

app.use(bodyParser.json())

app.use('/employee', employeeRouter)

app.get('/checker', (req, res) => {
    res.send('I see you!!!');
})

app.listen(3000, ()=>{
    console.log('We are live!!!')
})