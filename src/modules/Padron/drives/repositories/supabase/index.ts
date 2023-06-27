import { client } from '../../../../shared/supabase'

import type { Person, ResultSearch, SearchPersonRepository } from './types'

const PAGE_SIZE = 20
export default class PadronRepository implements SearchPersonRepository {
  private _search(person: Person, page: number, size: number): any {
    return client
      .from('padronjujuy2023')
      .select('*', { count: 'exact' })
      .match(person)
      .range((page - 1) * size, page * size)
      .limit(size)
  }

  async search(person: Person, page: number = 1): ResultSearch {
    const { data, error, count } = await this._search(person, page, PAGE_SIZE)
    const total = count ?? 0
    const pages = Math.ceil(total / PAGE_SIZE)

    if (error) throw new Error(error.message)

    return {
      list: data,
      page,
      pages,
      count: total,
    }
  }
}
