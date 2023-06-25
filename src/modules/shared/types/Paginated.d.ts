export default interface Paginated<T> {
  list: T[]
  count: number
  page: number
  pages: number
}
