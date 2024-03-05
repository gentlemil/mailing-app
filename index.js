import express from 'express'
import path from 'path'
import { sendWelcomeMessage } from './mailer.js'

const port = 3000
const app = express()
app.use(express.urlencoded({ extended: true }))

const __dirName = path.resolve()

app.get('/', (req, res) => {
  res.sendFile(__dirName + '/views/home.html')
})

const emails = []

app.post('/', async (req, res) => {
  const { email } = req.body
  emails.push(email)

  await sendWelcomeMessage(email)

  // show thanks-page
  res.sendFile(__dirName + '/views/thanks.html')
})

app.listen(port, () => console.log(`Server works on port: ${port}`))
