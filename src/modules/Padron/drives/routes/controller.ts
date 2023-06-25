import { Request, Response } from 'express'
import SearchPerson from '../../services/SearchPerson/SearchPerson'
import Controller from '../../../shared/types/controllers'
import ErrorHandler from '../../../ErrorHandler/drives/decorator/ErrorHandler'
import type { SearchPersonRepository } from '../../services/SearchPerson'

interface Repository extends SearchPersonRepository {}

export default class PadronController extends Controller {
  constructor(private readonly repository: Repository) {
    super()
  }

  @ErrorHandler()
  async routeHandler(req: Request, res: Response): Promise<void> {
    const service = new SearchPerson(this.repository)
    const person = req.body

    const result = await service.run(person)

    res.send(result)
  }
}
