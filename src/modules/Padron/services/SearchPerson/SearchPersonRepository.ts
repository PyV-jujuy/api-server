import type Paginated from '../../../shared/types/Paginated'
import type PersonRepositoryDTO from '../../core/dto/PersonRepositoryDto'

type ResultSearch = Promise<Paginated<PersonRepositoryDTO>>
export default abstract class Repository {
  abstract search(
    person: Partial<PersonRepositoryDTO>,
    page: number
  ): ResultSearch
}
