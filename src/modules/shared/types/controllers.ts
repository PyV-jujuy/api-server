import type { Request, Response } from 'express'

export default abstract class Controller {
  constructor() {
    this.routeHandler = this.routeHandler.bind(this)
  }

  abstract routeHandler(req: Request, res: Response): Promise<void> | void
}
