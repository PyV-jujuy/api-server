export default class Error {
  readonly date: Date = new Date(Date.now())
  constructor(
    readonly code: number,
    readonly context: string,
    readonly message: string
  ) {}

  toString(): string {
    const { code, context, message } = this

    const maxContextLength = 20
    const maxMessageLength = process.stdout.columns - 15 - maxContextLength // Considerando los espacios y los puntos suspensivos

    const formattedCode = `\x1b[31mCODE:${code}\x1b[0m`
    const formattedContext = context
      .slice(0, maxContextLength)
      .padEnd(maxContextLength)
    const formattedMessage = message
      .slice(0, maxMessageLength)
      .padEnd(maxMessageLength)

    return `${formattedCode} - ${formattedContext} - ${formattedMessage}`
  }
}
