import type Error from '../../core/Error'

export default abstract class Repository {
  abstract save(error: Error): Promise<void>
}
