const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port =process.env.PORT || 4444

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Welcome to SUPER server!')
})


app.listen(port, () => {
    console.log(`SUPER server is mixing it up on CH.${port}!`)
})