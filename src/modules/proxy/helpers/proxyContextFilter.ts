import { Request } from 'express'

export default function proxyContextFilter(pathname: string, req: Request): boolean {
  return !req.header('x-aim-request')
}
