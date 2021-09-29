import { Request, Response, NextFunction } from 'express'

import { createProxyMiddleware } from 'http-proxy-middleware'

export default function AimMiddleware(req: Request, res: Response, next: NextFunction) {
  createProxyMiddleware('/api', {
    target: 'http://localhost:3000',
  })
}
