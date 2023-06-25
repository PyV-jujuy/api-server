import { Router } from 'express'

import PadronRepository from '../repositories/supabase'
import PadronController from './controller'

const PATH = '/padron'

const PadronRouter = Router()
const repository = new PadronRepository()
const controller = new PadronController(repository)

PadronRouter.get(PATH, controller.routeHandler)

export default PadronRouter
