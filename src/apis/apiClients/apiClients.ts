import { createApiClient } from './helpers/axiosClientCreator'

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export const CORE_API_CLIENT = createApiClient({
  baseUrl: NEXT_PUBLIC_API_URL,
})

export const CAR_API_CLIENT = createApiClient({
  baseUrl: NEXT_PUBLIC_API_URL,
})
