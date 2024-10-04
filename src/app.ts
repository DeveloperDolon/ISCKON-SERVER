import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()
const PORT = process.env.PORT || 5000
app.use(express.json())

app.use(cors())

app.get('/', async (req: Request, res: Response) => {
  res.send('Kheye dibo kintu!')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
