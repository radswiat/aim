import { Response, Request } from 'express'

import { createProxyMiddleware, responseInterceptor } from 'http-proxy-middleware'
import proxyContextFilter from './helpers/proxyContextFilter'
import proxyRequestHandler from './helpers/proxyRequestHandler'
import proxyResponseHandler from './helpers/proxyResponseHandler'

import { ProxyConfig } from '../../aim.types'

export default function proxy(proxyConfig: ProxyConfig) {
  return createProxyMiddleware(
    proxyContextFilter,
    Object.assign({}, proxyConfig.proxy, {
      selfHandleResponse: true,
      onProxyReq: proxyRequestHandler,
      onProxyRes: proxyResponseHandler(),
    }),
  )
}
