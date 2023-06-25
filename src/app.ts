import express from 'express'
import { morgan, notFoundError } from './middlewares'
import padron from './modules/Padron/drives/routes'
import env from './modules/shared/env'

const ROOT_PATH = env.ROOT_PATH ?? '/'

const app = express()

// *** input middleware ***
app.use(morgan())
app.use(express.json())

// *** routes ***
app.use(ROOT_PATH, padron)

// *** output middleware ***
app.use(notFoundError)

export default app
