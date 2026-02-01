import { QUERY_CLIENT } from './reactQuery.constants'

export enum InvalidateQueryEnum {
  Exact = 'exact',
  All = 'all',
}

export const invalidateQueryKey = (queryArray: any, type = InvalidateQueryEnum.Exact) => {
  if (type === InvalidateQueryEnum.Exact) {
    QUERY_CLIENT.invalidateQueries({
      queryKey: queryArray,
    })
  }

  if (type === InvalidateQueryEnum.All) {
    QUERY_CLIENT.invalidateQueries({
      predicate: cached => {
        return cached.queryKey.includes(queryArray)
      },
      refetchType: 'inactive',
    })

    QUERY_CLIENT.invalidateQueries({
      predicate: cached => {
        return cached.queryKey.includes(queryArray)
      },
    })
  }
}
