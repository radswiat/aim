import { Request, Response } from 'express'
import { IncomingMessage } from 'http'

import { responseInterceptor } from 'http-proxy-middleware'

export default function proxyResponseHandler() {
  return responseInterceptor(async (responseBuffer: Buffer, proxyRes: IncomingMessage, req: Request, res: Response) => {
    console.log('proxy: res')
    // return response
    const response = responseBuffer.toString('utf8')
    let responseJson = null
    try {
      responseJson = JSON.parse(response)
    } catch (e) {
      console.log(e)
    }
    console.log(responseJson)
    responseJson.__meta = {
      time: new Date(),
    }
    if (responseJson) return JSON.stringify(responseJson)
    // response.__meta = {
    //   time: new Date(),
    // }
    return response
  })
}
