import express from 'express'

const app = express()

app.get('/api', function (req, res) {
  res.send({
    title: req.params.id,
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
