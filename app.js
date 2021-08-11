const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienD'

const app = express()

mongoose.connect(url, {useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected....')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000, () => {
    console.log('server started')
})

//'mongodb+srv://abhi2711:abhi2711@cluster0.e8cks.mongodb.net/mydata?retryWrites=true&w=majority'