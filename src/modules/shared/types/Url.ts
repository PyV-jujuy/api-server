export default class Url {
  constructor(readonly PATH: string) {}
  withParam(param: string): string {
    return `${this.PATH}/:${param}`
  }
}
