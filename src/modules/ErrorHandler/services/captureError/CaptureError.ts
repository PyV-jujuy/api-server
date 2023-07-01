import type ErrorCode from '../../core/ErrorCode'
import type CaptureErrorRepository from './CaptureErrorRepository'

export default class CaptureError {
  constructor(private readonly repository?: CaptureErrorRepository) {}

  run(error: ErrorCode): string {
    void this.repository?.save(error)
    return error.toString()
  }
}
