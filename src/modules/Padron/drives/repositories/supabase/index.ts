import { client } from '../../../../shared/supabase'

import type { PersonRepositoryDto } from '../../../core/dto'
import type GetByIDRepository from '../../../services/SearchPerson/SearchPersonRepository'
import type Paginated from '../../../../shared/types/Paginated'

const SUPABASE_CLIENT = client
const PAGE_SIZE = 20

type ResultSearch = Promise<Paginated<PersonRepositoryDto>>
export default class PadronRepository implements GetByIDRepository {
  async search(
    person: Partial<PersonRepositoryDto>,
    page: number = 1
  ): ResultSearch {
    const {
      data: list,
      error,
      count: _count,
    } = await SUPABASE_CLIENT.from('padronjujuy2023')
      .select('*', { count: 'exact' })
      .match(person)
      .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
      .limit(PAGE_SIZE)

    if (error) throw new Error(error.message)

    console.log(_count)
    const count = _count ?? 0
    const pages = Math.ceil(count / PAGE_SIZE)

    return {
      list,
      page,
      pages,
      count,
    }
  }
}
