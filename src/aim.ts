import { Application, Request, Response, NextFunction } from 'express'

import { AimConfig } from './aim.types'

import proxy from './modules/proxy'

export default function AimMiddleware(app: Application, config: AimConfig) {
  config.proxyList.forEach((proxyConfig) => {
    console.log(`aim: setup proxy for ${proxyConfig.sourcePath}`)
    app.use(proxyConfig.sourcePath, proxy(proxyConfig))
  })
}
