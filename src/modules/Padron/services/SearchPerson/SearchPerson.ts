import * as mappers from '../../core/mappers'

import type Paginated from '../../../shared/types/Paginated'

import type { PersonDto } from '../../core/dto'
import type SearchPersonsRepository from './SearchPersonRepository'

type ResultGetPerson = Promise<Paginated<PersonDto>>
export default class SearchPerson {
  constructor(private readonly repository: SearchPersonsRepository) {}

  async run(person: Partial<PersonDto>, page = 1): ResultGetPerson {
    const personSearch = mappers.toPartialRepositoryDto(person)
    const result = await this.repository.search(personSearch, page)

    const persons = result.list.map(repositoryDTO =>
      mappers.toPersonDto(repositoryDTO)
    )

    return {
      ...result,
      list: persons,
    }
  }
}
