const express = require('express')
const cors = require('cors')
const route = require('./routes/router')
const app = express()
const port = process.env.PORT || 4000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(route)


app.listen(port, () => {
  console.log('[OMOCAREER - ORCHESTRATOR] LISTENING TO PORT', port)
})