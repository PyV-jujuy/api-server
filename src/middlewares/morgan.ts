import morgan from 'morgan'
import env from '../modules/shared/env'

const PRODUCTION = Boolean(Number(env.PRODUCTION))

export default function (): any {
  return morgan(PRODUCTION ? 'common' : 'dev')
}
