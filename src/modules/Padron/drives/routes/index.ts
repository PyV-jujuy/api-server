import { Router } from 'express'

import Url from '../../../shared/types/Url'
import { SearchPadron, SearchPerson } from './controllers'
import PadronRepository from '../repositories/supabase'

const PadronRouter = Router()
const repository = new PadronRepository()

const PATH = '/padron'

const urlPadron = new Url(PATH)
const searchPadron = new SearchPadron(repository)
PadronRouter.get(urlPadron.PATH, searchPadron.routeHandler)

const urlPerson = new Url(`${PATH}/person`)
const searchPerson = new SearchPerson(repository)
PadronRouter.get(urlPerson.PATH, searchPerson.routeHandler)
PadronRouter.get(urlPerson.withParam('page'), searchPerson.routeHandler)

export default PadronRouter
