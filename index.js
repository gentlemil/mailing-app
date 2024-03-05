import express from 'express'
import path from 'path'
const port = 3000
const app = express()
app.use(express.urlencoded({ extended: true }))

const __dirName = path.resolve()

app.get('/', (req, res) => {
  res.sendFile(__dirName + '/views/home.html')
})

app.post('/', (req, res) => {
  // todo: save email address
  // todo: send confirmation mail
  res.sendFile(__dirName + '/views/thanks.html')
})

app.listen(port, () => console.log(`Server works on port: ${port}`))
