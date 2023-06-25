import type { Request, Response } from 'express'
import { Error as ErrorCode } from '../../core'
import { CaptureError } from '../../services/captureError'

const capture = new CaptureError()

export default function errorHandler(code = 500, msg?: string) {
  return function (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor
  ): void {
    const routeHandler = descriptor.value

    descriptor.value = async function (req: Request, res: Response) {
      try {
        await routeHandler.call(this, req, res)
      } catch (error) {
        if (error instanceof ErrorCode) {
          console.log(capture.run(error))
          res.status(error.code).send({ error: error.message })
        } else if (error instanceof Error) {
          res.status(code).json({ error: msg ?? error.message })
        }
      }
    }
  }
}
