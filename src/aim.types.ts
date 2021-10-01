export interface ProxyConfig {
  sourcePath: string
  proxy: {
    target: string
    changeOrigin?: boolean
    ws?: boolean
  }
}

export interface AimConfig {
  proxyList: ProxyConfig[]
}
