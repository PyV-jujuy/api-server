import type Paginated from '../../../../shared/types/Paginated'

export type { PersonRepositoryDto } from '../../../core/dto'
export type { SearchPersonRepository } from '../../../services/SearchPerson'

export type ResultSearch = Promise<Paginated<PersonRepositoryDto>>
export type Person = Partial<PersonRepositoryDto>
