export type ErrorType = {
  url?: string
  status: number
  message: string
  payload?: unknown
  response?: unknown
  stack?: unknown
  authorization?: string
}
