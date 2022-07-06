import express from 'express'
import { Helper } from './helper'
const app = express()

app.get('/', function (req, res) {
  Helper.funcionalidad(true)
  res.send('Hello World 2 ')
})

app.listen(3000)
