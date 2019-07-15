const express = require('express')
const app = express()
const POST = 4000

app.use(express.json())



app.listen(PORT, () => console.log(`${PORT} is always listening`))