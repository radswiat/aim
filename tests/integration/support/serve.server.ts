import express, { Request, Response } from 'express'

const app = express()

app.get('/api', async (req: Request, res: Response) => {
  res.send({
    title: req.query.id,
    origin: 'serve',
  })
})

app.post('/api', function (req, res) {
  res.send({
    title: 1,
    origin: 'serve',
  })
})

app.listen(3001, () => {
  console.log('server running')
})
