'use server'

import { handleServerExceptions } from '@/utils/exception/serverExceptions.helper'
import { unstable_cache } from 'next/cache'

import type { CacheServerApiType, CallServerApiType } from '../../types/core.types'
import { CACHE_DURATION_SECOND } from './cache.constants'

export const callServerApi: CallServerApiType = async (apiMethod, payload) => {
  try {
    const response = await apiMethod(payload)

    return { response, error: null }
  } catch (error) {
    handleServerExceptions(error)

    return { response: null, error }
  }
}

export const cacheServerApi: CacheServerApiType = async (apiMethod, payload, tags) => {
  const getCachedApi = unstable_cache(
    async () => {
      return callServerApi(apiMethod, payload)
    },
    tags,
    {
      tags,
      revalidate: CACHE_DURATION_SECOND,
    },
  )

  return getCachedApi()
}
