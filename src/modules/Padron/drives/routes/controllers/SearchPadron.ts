import { Request, Response } from 'express'
import SearchPerson from '../../../services/SearchPerson/SearchPerson'
import Controller from '../../../../shared/types/controllers'
import ErrorHandler from '../../../../ErrorHandler/drives/decorator/ErrorHandler'
import type { SearchPersonRepository } from '../../../services/SearchPerson'

interface Repository extends SearchPersonRepository {}

export default class PadronController extends Controller {
  constructor(private readonly repository: Repository) {
    super()
  }

  // TODO: send basic padron data to person
  @ErrorHandler()
  async routeHandler(req: Request, res: Response): Promise<void> {
    const service = new SearchPerson(this.repository)
    const { matricule, sex, name, lastName } = req.body

    // TODO: validate data
    /**
     *  TODO: buscar persona (debe existir por lo máximo 2 coincidencias)
     *  TODO: En caso de haber mas de uno usar el que tiene el typdoc != null
     *  */
    // TODO: en caso de no encontrar coincidencias mandar un throw new ErrorCode 400 y el contexto

    res.sendStatus(500)
  }
}
