import { useEffect } from 'react'
import { PER_PAGE } from '@/utils/navigate/navigation.constants'
import { isArray } from '@/utils/variables/variables.helpers'

import { QUERY_CLIENT } from './reactQuery.constants'
import { useCrud } from './useCrud'

export const useCrudPagination = (
  apiCallingQueryKey: string, // e.g. QUERY_KEYS.cars
  cachedListQueryArray: any, // the listQueryKey from useCrud that is e.g. [QUERY_KEYS.cars, filters]
  page: number,
  perPage = PER_PAGE,
) => {
  const { list: paginatedList, isLoading: isLoadingPagination } = useCrud<any>({
    queryKey: apiCallingQueryKey,
    filters: { page, perPage },
    configs: { enabled: page !== 1 },
  })

  useEffect(() => {
    QUERY_CLIENT.setQueryData(cachedListQueryArray, (list: any[]) => {
      if (!list || !isArray(list)) return []

      return [...list, ...paginatedList]
    })
  }, [paginatedList])

  return {
    isLoadingPagination,
  }
}
