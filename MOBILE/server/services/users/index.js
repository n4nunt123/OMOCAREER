if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4001
const router = require('./routes/router')
const { connection } = require('./config/connection')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/', (_, res) => {
  const endpoints = {
    GET: {
      ALL: '/users',
      BYID: '/users/:id'
    },
    POST: 'users/:id',
    DELETE: 'users/:id'
  }
  res.send(endpoints)
})


connection()
  .then(() => {
    app.use('/users', router)
    app.listen(port, () => {
      console.log('[OMOCAREER - USER] LISTEN TO PORT', port)
    })
  })
  .catch((err) => {
    console.log(err)
    console.log('APP REFUSED CONNECT TO THE SERVER')
  })