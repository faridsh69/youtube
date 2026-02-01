import { useEffect, useMemo } from 'react'
import { handleClientExceptions } from '@/utils/exception/clientExceptions.helper'
import { isArray } from '@/utils/variables/variables.helpers'
import { useMutation, useQuery } from '@tanstack/react-query'

import type {
  TypePayload,
  TypePayloadDelete,
  TypeUseCrudProps,
  TypeUseCrudReturn,
} from '../../types/reactQuery.types'
import { invalidateQueryKey } from './invalidateQueryKey'
import {
  optimisticUpdateCreateCrud,
  optimisticUpdateInDeleteCrud,
  optimisticUpdateInUpdateCrud,
} from './optimisticUpdate'
import { QUERY_CLIENT } from './reactQuery.constants'
import { getApiMapping } from './reactQuery.helpers'

export const useCrud = <T>({
  queryKey,
  modelId = '',
  filters = {},
  configs = {},
}: TypeUseCrudProps): TypeUseCrudReturn<T> => {
  const { listApi, singleApi, createApi, updateApi, deleteApi } = getApiMapping(queryKey)

  const listApiResponse = QUERY_CLIENT.getQueryData([queryKey])

  const {
    data: listApiData,
    error: listApiError,
    isFetching,
  } = useQuery({
    queryKey: [queryKey, filters],
    queryFn: async () => {
      const response = await listApi?.(filters)

      const apiResponse = response?.data

      QUERY_CLIENT.setQueryData([queryKey], apiResponse)

      if (isArray(apiResponse)) return apiResponse
      if (isArray(apiResponse?.data)) return apiResponse?.data || []
      if (isArray(apiResponse?.items)) return apiResponse?.items || []

      return []
    },
    placeholderData: [],
    enabled: configs.enabled ? configs.enabled : !!listApi,
    ...configs,
  })

  const list = useMemo(() => {
    return listApiData || []
  }, [listApiData]) as T[]

  const {
    data: single,
    error: singleApiError,
    isFetching: isFetchingSingle,
  } = useQuery<any>({
    queryKey: [queryKey, modelId],
    queryFn: async () => {
      const response = await singleApi(modelId)
      const apiResponse = response?.data

      return apiResponse?.data ? apiResponse.data : apiResponse || {}
    },
    placeholderData: {},
    ...configs,
    enabled: !!modelId,
  })

  const createMutation = useMutation({
    mutationFn: (payload: TypePayload<T>) => createApi(payload.data),
    onSuccess: (apiResponse: any, payload: TypePayload<T>) => {
      optimisticUpdateCreateCrud(queryKey, filters, apiResponse)

      payload.onSuccess?.(apiResponse)
    },
    onError: (error: any, payload: TypePayload<T>) => {
      payload.onError?.(error)
      handleClientExceptions(error, 'Create Api: ' + queryKey)
    },
  })

  const updateMutation = useMutation({
    mutationFn: (payload: TypePayload<T>) => updateApi(payload.data),
    onMutate: (payload: TypePayload<T>) => {
      optimisticUpdateInUpdateCrud(queryKey, filters, payload, single, modelId)
    },
    onSuccess: (apiResponse: any, payload: TypePayload<T>) => {
      payload.onSuccess?.(apiResponse)
    },
    onError: (error: any, payload: TypePayload<T>) => {
      payload.onError?.(error)
    },
  })

  const deleteApiFn = (payload: TypePayloadDelete) => deleteApi(payload.id as number)

  const deleteMutation = useMutation({
    mutationFn: deleteApiFn,
    onSuccess: (apiResponse: any, payload: TypePayloadDelete) => {
      optimisticUpdateInDeleteCrud(queryKey, filters, payload)
      payload.onSuccess?.(apiResponse)
    },
    onError: (error: any, payload: TypePayloadDelete) => {
      payload.onError?.()
    },
  })

  useEffect(() => {
    if (listApiError) {
      handleClientExceptions(listApiError, 'Fetching list Api: ' + queryKey)
    }

    if (singleApiError) {
      handleClientExceptions(singleApiError, 'Showing item Api: ' + queryKey)
    }
  }, [listApiError, singleApiError, queryKey])

  const invalidateList = () => {
    invalidateQueryKey([queryKey, filters])
  }

  return {
    list,
    listApiResponse,
    isLoading: isFetching,
    isError: !!listApiError,
    single,
    isLoadingSingle: isFetchingSingle,
    createMutation,
    updateMutation,
    deleteMutation,
    listQueryKey: [queryKey, filters],
    singleQueryKey: [queryKey, modelId],
    invalidateList,
  }
}
