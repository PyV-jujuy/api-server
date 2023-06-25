import type { Request, Response } from 'express'

export default function (_req: Request, res: Response): void {
  res.status(404).json({ error: 'page not found' })
}
