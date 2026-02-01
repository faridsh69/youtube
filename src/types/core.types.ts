export type CallServerApiType = <TPayload, TResponse>(
  apiMethod: (payload: TPayload) => Promise<TResponse>,
  payload: TPayload,
) => Promise<{ response: TResponse | null; error: unknown | null }>

export type CacheServerApiType = <TPayload, TResponse>(
  apiMethod: (payload: TPayload) => Promise<TResponse>,
  payload: TPayload,
  tags: string[],
) => Promise<{ response: TResponse | null; error: unknown | null }>

export type PaginatedResponseType<T> = {
  items: T[]
  page: number
  pages: number
  size: number
  total: number
}

export type TypeUser = {
  id: string
  email: string
  username: string
  avatar_link: string
}
