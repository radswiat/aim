import { Request, Response } from 'express'
import { ClientRequest } from 'http'
import { ServerOptions } from 'http-proxy'

export default function proxyRequestHandler(proxyReq: ClientRequest, req: Request, res: Response, options: ServerOptions) {
  proxyReq.setHeader('x-aim-request', 'true')
}
