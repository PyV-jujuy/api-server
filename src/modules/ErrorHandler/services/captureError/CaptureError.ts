import type Error from '../../core/Error'
import type CaptureErrorRepository from './CaptureErrorRepository'

export default class CaptureError {
  constructor(private readonly repository?: CaptureErrorRepository) {}

  run(error: Error): string {
    void this.repository?.save(error)
    return error.toString()
  }
}
