import express, { Request, Response } from 'express'
import axios from 'axios'

const app = express()

app.get('/get', async (req: Request, res: Response) => {
  const resData = await axios.get(`http://localhost:3001/api?id=${req.query.id}`)
  res.send(resData.data)
})

app.listen(3000, () => {
  console.log('server running')
})
