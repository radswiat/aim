import express, { Request, Response } from 'express'
import axios from 'axios'

import aimMiddleware from '../../../src/aim'

const app = express()

aimMiddleware(app, {
  proxyList: [
    {
      sourcePath: '/get',
      proxy: {
        target: 'http://localhost:3000',
        // changeOrigin: true,
      },
    },
  ],
})

app.get('/get', async (req: Request, res: Response) => {
  console.log('express: get request!')
  const resData = await axios.get(`http://localhost:3001/api?id=${req.query.id}`)
  res.send(resData.data)
})

app.listen(3000, () => {
  console.log('server running')
})
