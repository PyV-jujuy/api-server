import type ErrorCode from '../../core/ErrorCode'

export default abstract class Repository {
  abstract save(error: ErrorCode): Promise<void>
}
