import express, { Request, Response } from 'express'

const app = express()

app.get('/api', async (req: Request, res: Response) => {
  res.send({
    title: req.query.id,
    origin: 'serve',
    time: new Date(),
  })
})

app.post('/api', function (req, res) {
  res.send({
    title: 1,
    origin: 'serve',
    time: new Date(),
  })
})

app.listen(3001, () => {
  console.log('server running')
})
