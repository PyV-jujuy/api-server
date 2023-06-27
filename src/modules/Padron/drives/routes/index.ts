import { Router } from 'express'

import PadronRepository from '../repositories/supabase'
import PadronController from './controller'
import Url from '../../../shared/types/Url'

const PATH = '/padron'
const url = new Url(PATH)

const PadronRouter = Router()
const repository = new PadronRepository()
const controller = new PadronController(repository)

PadronRouter.get(url.PATH, controller.routeHandler)
PadronRouter.get(url.withParam('page'), controller.routeHandler)

export default PadronRouter
