const express = require('express')
const bodyParser = require('body-parser')
const api = require('./routes/api')
const cors = require('cors')

const app = express()

const PORT = 3000

app.use(bodyParser.json())
app.use(cors())

app.use('/api', api)

app.get('/', (req, res) => {
    res.send('Server works.')
})
    
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
